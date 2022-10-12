import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function NavBar() {
  const {currentUser,logOut} = React.useContext(AuthContext);
    
  const navigate = useNavigate()
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    if (e.target.innerText=== 'Login') {
      navigate('/login')
    }else if (e.target.innerText === 'Sign Up') {
      navigate('/register')
    }else if (e.target.innerText === 'Logout'){
      logOut(navigate)
      
    }

  };

  return (
    <Box sx={{marginBottom:"0px"}} >
     
      <AppBar position="static" style={{cursor:"pointer"}} sx={{backgroundColor:"tomato"}}>
        <Toolbar>
            <Typography variant="h6" color="inherit" sx={{ flexGrow: 3,textAlign:"left"}} style={{marginLeft:"0px"}} onClick={()=>navigate("/home")} >
              Clarusway's Personal List App
            </Typography>
            {currentUser ? (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:"end",paddingRight:"1rem"}} > 
            {currentUser?.toUpperCase()}
          </Typography>):
          (<Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:"end",paddingRight:"1rem" }}>
          Guest
        </Typography>)}
          
        <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ flexGrow: 1,bgcolor:"white",color:"black",fontSize:40,width:"55px",height:"55px",marginLeft:"2px",'&:hover': {
                  backgroundColor: 'black',
                  color:"white",
                  opacity: [0.9, 0.8, 0.7],
                } }}
              >
                {currentUser ? currentUser[0].toUpperCase():<AccountCircle sx={{fontSize:55,width:"8vh",height:"8vh",color: "tomato"}}/> }
              </IconButton>
              {currentUser ? (<Menu
              
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={(e)=>handleClose(e)}>Logout</MenuItem>
                
              </Menu>):(<Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={(e)=>handleClose(e)}>
                   Login
                </MenuItem>
                <MenuItem onClick={(e)=>handleClose(e)}>Sign Up</MenuItem>
              </Menu>)}
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
