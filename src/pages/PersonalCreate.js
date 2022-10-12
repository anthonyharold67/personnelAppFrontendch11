import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation, useNavigate } from "react-router-dom";
import { PersonalContext } from '../contexts/PersonalContext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const theme = createTheme();



export default function PersonalCreate() {
  const navigate = useNavigate()

  const [firstName,setFirstName] = React.useState("")
  const [lastName,setLastName] = React.useState("")
  const [isStaffed,setIsStaffed] = React.useState(false)
  const [title,setTitle] = React.useState("Junior")
  const [gender,setGender] = React.useState("Male")
  const [salary,setSalary] = React.useState(1250)

  const handleSubmit = (e)=>{
    e.preventDefault();
  }


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '91.5vh'}}>
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
            <Typography component="h1" variant="h5">
              PersonalCreate
            </Typography> 
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }} component={"form"} onSubmit={handleSubmit} >
        <FormControl >
          <InputLabel id="title-select-label">Title</InputLabel>
          <Select
            id="title-select"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            required
          >
            <MenuItem value={"Team Lead"}>Team LEAD</MenuItem>
            <MenuItem value={"Mid Lead"}>Mid LEAD</MenuItem>
            <MenuItem value={"Junior"}>Junior</MenuItem>
          </Select>
        </FormControl>
          <TextField
            label="First Name"
            name="first_name"
            id="firstName"
            type="text"
            variant="outlined"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            required
          />
          <TextField
            label="Last Name"
            name="last_name"
            id="lastName"
            type="text"
            variant="outlined"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            required
          />
          <FormControlLabel 
            name="is_staff"
            control={<Checkbox />}
            onChange={(e)=>setIsStaffed(e.target.value)}
            label="Is Staffed?" 
          />
          <FormControl >
          <InputLabel id="gender-select-label">Gender</InputLabel>
          <Select
            name="gender"
            id="gender-select"
            value={gender}
            onChange={(e)=>setGender(e.target.value)}
            required
          >
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
            <MenuItem value={"Prefer Not Say"}>No prefer say</MenuItem>

          </Select>
        </FormControl>
          <TextField
            label="Salary"
            id="salary"
            type="number"
            variant="outlined"
            InputProps={{ inputProps: { min: 1250 } }}
            value={salary}
            onChange={(e)=>setSalary(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" size="large">
            Create Personal
          </Button>
        </Box>
        </Box>
            
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


