import { Button, Container, Grid, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useLocation ,useNavigate} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import login from '../../images/login.png'
const Login = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const [state, setState] = React.useState({
        open: false,
        vertical: 'center',
        horizontal: 'center',
      });
    
      const { vertical, horizontal, open } = state;
    
      const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
      };
    
      const handleClose = () => {
        setState({ ...state, open: false });
      };
    const { googleSignIn,loginUser,error}=useAuth();
    const handleGoogleSignIn=()=>{
        googleSignIn(location, navigate)
    }
    const [loginData,setLoginData]=useState({})
    const handleLogin=e=>{
        const text=e.target.name;
        const fieldValue=e.target.value;
        const newLoginData={...loginData}
        newLoginData[text]=fieldValue;
        setLoginData(newLoginData);


    }
    const handleLoginForm=e=>{
         e.preventDefault();
        loginUser(loginData.email, loginData.password, location, navigate)
    }
    return (
        <Container>
        <Typography variant="h2" sx={{fontFamily: 'Cambo serif',}}>LOGIN HERE</Typography>
        <Grid  container spacing={2}>
            <Grid item xs={12} sm={6}>
                
              <form onSubmit={handleLoginForm}>
                    <TextField
                   sx={{width:'75%'}}
                    label="Email"
                    type="email"
                    name="email"
                    variant="standard"
                    onBlur={handleLogin}
                    />
                    <br/>
                    <TextField
                    sx={{width:'75%'}}
                    label="Password"
                    type="password"
                    name="password"
                    variant="standard"
                    onBlur={handleLogin}
                    /><br/>
                      <React.Fragment>
                        <Button  type='submit'
                            onClick={handleClick({
                            vertical: 'top',
                            horizontal: 'center',
                            })}>LOGIN</Button></React.Fragment> 
                </form>
                <Button  onClick={handleGoogleSignIn}>GOOGLE SIGN IN</Button>
                {
                    error?<Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    message= {error}
                    key={vertical + horizontal}
                />:<Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    message="Successfully Login "
                    key={vertical + horizontal}
                />
                }
                
                 <NavLink style={{ textDecoration: 'none' }}  to="/register" >Not Register ? PLease Register !</NavLink>
            </Grid>  
            <Grid item xs={12} sm={6}>
                <img src={login} alt="" />
            </Grid>   
        </Grid> 
    </Container> 
    );
};

export default Login;