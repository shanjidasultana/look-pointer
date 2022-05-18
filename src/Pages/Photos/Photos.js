import { Container, Grid, Typography ,Button} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {Link} from 'react-router-dom';
import heading from '../../images/h4.png'
import '../Gellary/Gellary.css'
const Photos = () => {
    const images = [
'https://i.ibb.co/ZxCQvxs/p21.jpg',
'https://i.ibb.co/FqM1KJ6/p23.jpg',
'https://i.ibb.co/NTPZwfy/p26.jpg',
'https://i.ibb.co/P1sKYBf/p27.jpg',
'https://i.ibb.co/r2XHh0N/p28.jpg',
'https://i.ibb.co/t8hGPBs/p30.jpg',
'https://i.ibb.co/gS9qWJ2/24.jpg',
'https://i.ibb.co/D90BSNm/25.jpg',
'https://i.ibb.co/VNYt0D9/29.jpg',
'https://i.ibb.co/7KBJ2rz/31.jpg',
'https://i.ibb.co/bKGwDT1/f19.jpg',
'https://i.ibb.co/0DGygQJ/p.jpg',
'https://i.ibb.co/gS9qWJ2/24.jpg',
'https://i.ibb.co/D90BSNm/25.jpg',
'https://i.ibb.co/VNYt0D9/29.jpg',
'https://i.ibb.co/7KBJ2rz/31.jpg',
'https://i.ibb.co/8XzV7ZV/love-romance-affection-concept-isolated-image-elegant-senior-man-with-beard-baldness-holding-gift-fl.jpg',
'https://i.ibb.co/1JYHnb2/p20.jpg',
'https://i.ibb.co/6vhYKMx/p18.jpg',
'https://i.ibb.co/BVSh2Zk/p17.jpg',
'https://i.ibb.co/0jRX9Lr/p16.jpg',
'https://i.ibb.co/tDLLTwQ/p15.jpg',
'https://i.ibb.co/Y0jcP67/p14.jpg',
'https://i.ibb.co/1G6SMVR/p13.jpg',
'https://i.ibb.co/KqBSrjc/p12.jpg',
'https://i.ibb.co/kMtcQJ3/p11.jpg',
'https://i.ibb.co/X84qZRb/p10.jpg',
'https://i.ibb.co/CtPJSSp/p9.jpg',
'https://i.ibb.co/HG7Gtz2/p8.jpg',
'https://i.ibb.co/r77sK10/p7.jpg',
'https://i.ibb.co/VpZjHWh/p6.jpg',
'https://i.ibb.co/5rLzhCB/p5.jpg',
'https://i.ibb.co/m5dPyBj/p4.jpg',
'https://i.ibb.co/HT2mV9M/p3.jpg',
'https://i.ibb.co/2YhyKJN/p2.jpg',
'https://i.ibb.co/JtnzDL5/p1.jpg',
];
    return (
      <Box sx={{bgcolor:'#3e2723'}}>
        <Button sx={{mt:11,bgcolor:'#212121',px:5,py:2}}  ><Link to="/" style={{textDecoration:'none'}} >Back To Home Page</Link></Button>
      <Container sx={{pt:11}}>
      <Typography sx={{borderBottom:4,borderColor:'primary.main'}} variant="h2">OUR Gallery</Typography>
      <img src={heading} alt=""  style={{margin:'12px '}}/>

    <Grid container spacing={2}>
       {
           images.map(image=><Grid key={image} item xs={12} sm={6} md={4}>
         <a href = "#" id = "zoomIn"  className= "grayscale column col-xs-6"><img src = {image} alt="" /></a>  

               </Grid>
               )
       }     
    </Grid>
    </Container> 
    </Box>
    );
};

export default Photos;