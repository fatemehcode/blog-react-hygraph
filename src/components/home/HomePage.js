import React from 'react';
import Authors from '../authors/Authors';
import Posts from '../posts/Posts';
function HomePage(props) {
    return (
        <div>
            <Posts />
            <Authors/>
        </div>
    );
}

export default HomePage;