import React from 'react';
import { gql,useQuery } from '@apollo/client';
import CardEL from '../shared/CardEL';
const Posts = () => {  
  const GET_ALL_POSTS = gql`
    query MyQuery {
      posts {
        author {
          name
          avatar {
            url
          }
        }
        title
        slug
        coverPhoto {
          url
        }
      }
    }
  `;
    
  const { loading, error, data } = useQuery(GET_ALL_POSTS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
    
  return (
    <div>            
      {data.posts.map((post) => (<CardEL {...post} />))}
    </div>
  );
};

export default Posts;