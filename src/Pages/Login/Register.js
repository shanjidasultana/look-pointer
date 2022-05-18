import { Box, Button, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import register from '../../images/reg.jpg'

const Register = () => {
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
    const [loginData,setLoginData]=useState({})
    const navigate=useNavigate();
    const {error,isLoading,registerUser}=useAuth();
    
    const handleRegister=e=>{
        const text=e.target.name;
        const fieldValue=e.target.value;
        const newLoginData={...loginData}
        newLoginData[text]=fieldValue;
        setLoginData(newLoginData);

    }
    const handleformSubmit=e=>{
        e.preventDefault();
        if(loginData.password ===loginData.password2){
            registerUser(loginData.email, loginData.password, loginData.name, navigate)
        }
        else{
            console.log(loginData.password2,loginData.password);
            alert('Your password did not match');
            return;
          
        }
    }
    return (
        <Box height="100vh"  sx={{background:`url(${register})`,backgroundPosition:'cover',backgroundSize:'100% ',backgroundRepeat:'no-repeat',backgroundColor:'#ffe0b2'}}>
        <Typography variant="h2" sx={{fontFamily: 'Cambo serif',pt:9}}>REGISTER HERE</Typography>
               <form onSubmit={handleformSubmit} >
                    <TextField
                    sx={{width:'50%',mt:3,}}
                    label="Name"
                    type="text"
                    name="name"
                    variant="standard"
                    onBlur={handleRegister}
                    /><br/>
                    <TextField
                  sx={{width:'50%',mt:3,}}
                    label="Email"
                    type="email"
                    name="email"
                    variant="standard"
                    onBlur={handleRegister}
                    /><br/>
                    <TextField
                    sx={{width:'50%',mt:3,}}
                    label="Password"
                    name="password"
                    type="password"
                    variant="standard"
                    onBlur={handleRegister}
                    /><br/>
                    <TextField
                    label="Re-Write Password"
                    type="password"
                    name="password2"
                    onBlur={handleRegister}
                    variant="standard"
                    sx={{width:'50%',mt:3,}}
                    /><br/>
                     <React.Fragment>
                        <Button sx={{bgcolor:'#9575cd',textShadow: '3px 4px 5px rgb(61, 55, 55)',   fontFamily: 'Cambria, Cochin, Georgia, Times, serif', color:'white',fontSize:24,fontWeight:'bold',py:1, px:8,my:6,mx:'auto',width:'50%'}} type='submit'
                            onClick={handleClick({
                            vertical: 'top',
                            horizontal: 'center',
                            })}
                        >Register</Button></React.Fragment>
                </form>
                    {/* {isLoading && <CircularProgress/>} */}
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
                    message="Successfully Register "
                    key={vertical + horizontal}
                />
                }

                <NavLink  style={{ textDecoration: 'none',textShadow: '3px 4px 5px rgb(61, 55, 55)',fontFamily: 'Cambria, Cochin, Georgia, Times, serif', color:'white',fontSize:24,fontWeight:'bold',padding :'15px 10px',width:'50%'}}  to="/login" variant="h5">ALeady Register ? PLEASE LOGIN</NavLink>
    </Box> 
    );
};

export default Register;