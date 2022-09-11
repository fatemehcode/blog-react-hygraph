import { Typography,Container ,Grid} from '@mui/material';
import React from 'react';
import Authors from '../authors/Authors';
import Posts from '../posts/Posts';
function HomePage(props) {
    return (
        <Container maxWidth="lg" >
            <Grid container spacing={2} padding={2} mt={2}>
                <Grid item xs={12} md={4} >
                    <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
                       <Authors /> 
                    </Typography>                    
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
                        <Posts />
                    </Typography>          
                </Grid> 
            </Grid>
        </Container>
    );
}

export default HomePage;