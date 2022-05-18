import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound.gif'
const NotFound = () => {
    return (
        <Grid container spacing={2}>
            <Grid items xs={12} md={6}>
                <img src={notFound} alt="" />
            </Grid>
            <Grid items xs={12} md={6}>
                <Typography variant="h2">PAGE NOT FOUND</Typography>
                <Typography variant="body2">404 Something Went Wrong ..PLease Go Back</Typography>
                <Link to="/"><Button>Back To Home Page</Button></Link>
            </Grid>
        </Grid>
    );
};

export default NotFound;