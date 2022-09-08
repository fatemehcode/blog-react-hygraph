import {gql} from '@apollo/client';
const GET_ALL_POSTS = gql`
    query MyQuery {
        posts {
            title
            slug
            content {html}
            coverPhoto {url}
            author {
                avatar { url}
                name
            }
        }
    }
`;








export {
    GET_ALL_POSTS,
};