import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img1 from '../../../images/c1.png';
import img2 from '../../../images/c2.png';
import img3 from '../../../images/c3.png';
import img4 from '../../../images/c4.png';
import img5 from '../../../images/c5.png';
import img6 from '../../../images/c6.png';
import heading3 from '../../../images/h3.png';
import { ImgOverlay } from 'image-overlay-react'
import 'image-overlay-react/dist/index.css'
import img8 from '../../../images/c8.png';
import img9 from '../../../images/c9.png';

const CarePoints = () => {
    const cares=[
        {   "name":"A ",
            "pic":img1
        
        },
        {   "name":" B",
            "pic":img2
        
        },
        {   "name":"C ",
            "pic":img3
        
        },
        {   "name":"D ",
            "pic":img4
        
        },
        {   "name":"E ",
            "pic":img5
        
        },
        {   "name":"E ",
            "pic":img6
        
        },
        {   "name":"E ",
            "pic":img8
        
        },
        {   "name":"E ",
            "pic":img9
        
        }
    ]
    return (
        <Container sx={{mt:11}}>
            <Box sx={{display:'flex'}}>
             <img src={heading3} alt="" sx={{width:'100px'}}/>
              <Typography sx={{borderBottom:4,borderColor:'primary.main'}} variant="h2">OUR CARING POINTS</Typography>
            </Box>
            <Box sx={{mb:6,mt:2,borderBottom:4,borderColor:'primary.main'}} ></Box>
        <Grid container spacing={2}>
            {
                cares.map(care=>  <Grid data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom" data-aos-duration="1500" key={care.name} item xs={12} sm={6} >
                    <Card sx={{ display: 'flex' ,   boxShadow:"3px 8px 6px rgb(61, 55, 55)", backgroundColor:"rgb(163, 222, 233)"}}>
                    <ImgOverlay
                        imgSrc={care.pic}
                        bgColor='gray'
                        position='right'
                        height='300'
                        fSize='28px'
                        >
                        It's a text
                        </ImgOverlay>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {care.name}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Mac Miller
                            </Typography>
                            </CardContent>
                            
                      
                    </Card>
        </Grid>)  
        }
 
        
            
        </Grid>
    </Container> 
    );
};

export default CarePoints;