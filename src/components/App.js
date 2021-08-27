import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Fragment } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import { getSingleBlog } from "../services/blogService";
import { Header } from "./Header/Header.jsx";
import { HomePage } from "./HomePage/HomePage.jsx";
import { AboutPage } from "./AboutPage/AboutPage.jsx";
import { BlogList } from "./BlogList/BlogList.jsx"

import './App.css';

const NotFoundPage = () => {
  return (
  <div>Page Not Found ☹️</div>
  )
}

const SingleBlogPage = (props) => {
  const [blog, setBlog] = useState({})
  useEffect (() => {
    getSingleBlog (props.match.params.id).then((blog) => {
        setBlog(blog);
    });
},[props.match.params.id])
  
return (
  <>
    <div className='single-blog-container'>
        <h1>{blog.title}</h1>
        <p className='blogItem'>{blog.body}</p>
    </div>
  </>
)
}


function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
         <Route exact path='/' component={HomePage} />
         <Route path='/about' component={AboutPage} />
         <Route exact path='/blog' component={BlogList} />
         <Route path="/blog/:id" component={SingleBlogPage} />
         <Route path='/not-found' component={NotFoundPage} />
         <Redirect from='/' to='/not-found' />
      </Switch>
    </Fragment>
  );
}

export default App;
