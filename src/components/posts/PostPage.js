import React from 'react';
import { useParams } from 'react-router-dom';

function PostPage(props) {
    const {slug} = useParams();
    return (
        <div>
            PostPage {slug}
        </div>
    );
}

export default PostPage;