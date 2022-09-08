import React from 'react';
import Layout from './components/layout';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import PostPage from './components/posts/PostPage';
import AuthorPage from './components/authors/AuthorPage';
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={ <HomePage/>} />
          <Route path='/posts/:slug' element={ <PostPage/>} />
          <Route path='/authors/:slug' element={ <AuthorPage/>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
