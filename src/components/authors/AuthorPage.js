import React from 'react';
import { useParams } from 'react-router-dom';

function AuthorPage(props) {
    const {slug} = useParams();
    return (
        <div>
            AuthorPage {slug}
        </div>
    );
}

export default AuthorPage;