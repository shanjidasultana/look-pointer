import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from "react";
import logo from '../../../images/logo.png'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
  Box,
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
    marginLeft:'40px',
    fontSize:'42px',
    fontFamily: 'Cambria, Cochin, Georgia, Times, serif',
    textShadow:' 2px 5px 25px  #140975',
   
  },
  link: {
    textDecoration: "none",
    fontWeight:"bold",
    fontSize:"22px",
    color:'gray',
    fontFamily:'Fondamento',
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "pink",
      borderBottom: "2px solid gray",
    },
    
  },
  smalllink:{
    textDecoration:"none",
    color: "blue",
    fontSize: "20px",
  },
  icon:{
      color: "pink",
     marginLeft:'52px',
  },
  header:{
    background:'#b0a4ba',
    padding:'10px 2px',
    color:'white'
  },
  draw:{
    width:'300px',
    
  },
  single:{
    textAlign:'center',
    margin :'12px auto'
  }

}));


const Header = () => {
  const {user,logout}=useAuth();
  console.log(user);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
    const classes = useStyles();
    
    return (

      <AppBar position="static" className={classes.header}>
      <CssBaseline />
      <Toolbar>
        <Box sx={{display:'flex',alignItems:'center',justifyItems:'center'}}>
            <img src={logo} alt="" />
            <Typography variant="h4"  className={classes.logo}>
              Katy Morrious 
            </Typography>
        </Box>
        {isMobile ? (  <>
      <Drawer
        
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List className={classes.draw}> 
         <ListItem  className={classes.single}onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.smalllink}>Home</Link>
            </ListItemText>
          </ListItem>
         <ListItem  className={classes.single}onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/dashboard" className={classes.smalllink}>Dashboard</Link>
            </ListItemText>
          </ListItem>
         <ListItem  className={classes.single}onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/gallery" className={classes.smalllink}>Gallery</Link>
            </ListItemText>
          </ListItem>
         <ListItem  className={classes.single}onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about" className={classes.smalllink}>About</Link>
            </ListItemText>
          </ListItem>
         
          <ListItem className={classes.single} onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact" className={classes.smalllink}>Contact</Link>
            </ListItemText>
          </ListItem>
          <ListItem className={classes.single} onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about" className={classes.smalllink}>Faq</Link>
            </ListItemText>
          </ListItem>
          {user?.email? <Button onClick={logout} style={{margin :'12px  95px'}} className={classes.smalllink}>Logout</Button> :<ListItem className={classes.single} onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/login" className={classes.smalllink}>Login</Link>
            </ListItemText>
          </ListItem>}
          {user?.email && <Box className={classes.single}>
            <img src={user.photoURL} alt="" />
            <Typography  className={classes.smalllink}>{user.displayName}</Typography>
          </Box>}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
        <MenuIcon  />
      </IconButton>
    </>):( <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            
            <Link to="/dashboard" className={classes.link}>
             Dashboard
            </Link>
            
            
            {/* <Link to="/contact" className={classes.link}>
              Contact
            </Link> */}
            <Link to="/about" className={classes.link}>
              About
            </Link>
            {/* <Link to="/faq" className={classes.link}>
              FAQ
            </Link> */}
           
           {user?.email? <Button style={{marginLeft:'18px'}} onClick={logout}>Logout</Button>:<Link to="/login"  className={classes.link}>
             Login
            </Link>}
            {user?.email && <>
            <img src={user.photoURL} width="50px"style={{borderRadius:'50%',marginLeft:"39px",textAlign:'center'}} alt="" />
            <Typography style={{fontFamily:"Fondamento",textAlign:'center',marginLeft:"19px",marginTop:'9px'}}>{user.displayName}</Typography>
          </>}
          </div>)}
      </Toolbar>
    </AppBar>
    );
};

export default Header;

