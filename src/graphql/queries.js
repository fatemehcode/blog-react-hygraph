import {gql} from '@apollo/client';

const GET_BLOGS_INFO = gql`
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

const GET_AUTHORS_INFO = gql`
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

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;

const GET_POST_INFO = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        name
        field
      }
      content {
        html
      }
      title
      coverPhoto {
        url
      }
    }
  }
`;

const GET_POST_COMMENTS = gql`
  query MyQuery ($slug: String!) {
    comments(where: {post: {slug: $slug}}) {
      id
      name
      text
      post {
        author {
          avatar {
            url
          }
        }
      }
    }
  }
`;
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
export {
  GET_BLOGS_INFO,
  GET_AUTHORS_INFO,
  GET_AUTHOR_INFO,
  GET_POST_INFO,
  GET_POST_COMMENTS,
  GET_ALL_POSTS,
  GET_ALL_AUTHORS,
};
