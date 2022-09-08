import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Grid } from '@mui/material';
const Authors = () => {
    const GET_ALL_AUTHORS = gql`
        query MyQuery {
            authors {
                id
                name
                slug
                avatar {
                url
                }
            }
        }
    `;
    const { loading, error, data } = useQuery(GET_ALL_AUTHORS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
        <div>
            {data.authors.map((author) => (
                <Grid item>{author.name}</Grid>
            ))}
        </div>
    );
};

export default Authors;