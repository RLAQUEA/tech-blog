//Get route for getting all blog posts
const homeRoutes = require('express').Router();
// const allPosts;
const { Comment, User, Post } = require('../models');

// // GET all blog posts for homepage
homeRoutes.get('/', async (req, res) => {
  try {
    const dbBlogData = await Post.findAll({
      include: [User]
    });
    console.log(dbBlogData);
allPosts = dbBlogData.map((post) => post.get({ plain: true })
);
    //The render method acts on the Handlebars.js template and connects the route to its appropriate template
    res.render('all-posts', {
      allPosts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET one blog post
homeRoutes.get('/post/:id', async (req, res) => {
  console.log("looking for post #", req.params.id);
  try {
    const dbPostData = await Post.findByPk(req.params.id);
    const post = dbPostData.get({ plain: true });
    res.render('single-post', { post });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
homeRoutes.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

homeRoutes.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});


module.exports = homeRoutes;
