import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import {Formik,Form} from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../contexts/AuthContext';


const theme = createTheme();

export default function Register() {
  const navigate = useNavigate()
  const {createUser} = React.useContext(AuthContext)

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ maxHeight: '91.5vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
        
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          
            <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'darkslategray' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{color:"tomato"}}>
              Register
            </Typography> 
            <Formik initialValues={{userName:"",firstName:"",lastName:"",email:"",password:""}}
        validationSchema={Yup.object().shape({
          userName: Yup.string().required("Name is required"),
          firstName: Yup.string().required("Name is required"),
          lastName: Yup.string().required("Name is required"),
          email: Yup.string().email("Email is invalid").required("Email is required"),
          password: Yup.string().min(8,"Şifre en az 8 karakter olmalıdır").max(12).matches(/\d+/,"Şifre en az bir sayı içermelidir").matches(/[a-z]+/,"Şifre en az bir küçük harf içermelidir.").matches(/[A-Z]+/,"Şifre en az bir büyük harf içermelidir.").matches(/[!,?{}><%&$#£+-.]+/, 'Sifreniz ozel karakterlerden (!,?{}><%&$#£+-.) en az birini icermelidir.').required("Şifre gereklidir")
        })}
        onSubmit={(values,actions)=>{
          actions.resetForm()
          actions.setSubmitting(false)
          createUser(values.email,values.password,values.firstName,values.lastName,values.userName)
        }}
        >
          {({values,handleChange,errors,touched,handleBlur})=>(
        <Form>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.8 }}>
          <TextField
            label="User Name"
            name="userName"
            id="userName"
            type="text"
            variant="outlined"
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.userName && Boolean(errors.userName)}
            helperText={touched.userName && errors.userName}
          />
          <TextField
            label="First Name"
            name="firstName"
            id="firstName"
            type="text"
            variant="outlined"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            label="Last Name"
            name="lastName"
            id="lastName"
            type="text"
            variant="outlined"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.lastName && Boolean(errors.lastName)}
            helperText={touched.lastName && errors.lastName}
          />
          <TextField
            label="Email"
            name="email"
            id="email"
            type="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
          />
          <TextField
            label="password"
            name="password"
            id="password"
            type="password"
            variant="outlined"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
          />
          <Button type="submit" variant="contained" size="large">
            Register
          </Button>
        </Box>
        </Form>
        )}
        </Formik>
          <Grid container>
                
                <Grid item>
                  <Link href="/login" variant="body2" style={{color:"darkslategray"}}>
                    {"Do you have an account? Login"}
                  </Link>
                </Grid>
              </Grid>
          </Box>
            
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

