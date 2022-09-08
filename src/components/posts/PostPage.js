import React from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from '../comments/CommentForm';
import Comments from '../comments/Comments';

function PostPage(props) {
    const {slug} = useParams();
    return (
        <div>
            PostPage {slug}
            <CommentForm slug={slug}/>
            <Comments slug={slug}/>
        </div>
    );
}

export default PostPage;