import { Container ,Grid} from '@mui/material';
import React from 'react';
import Authors from '../authors/Authors';
import Posts from '../posts/Posts';
function HomePage(props) {
    return (
        <Container>
            <Grid container>
                <Grid item><Authors /></Grid>
                <Grid item><Posts /></Grid> 
            </Grid>
        </Container>
    );
}

export default HomePage;