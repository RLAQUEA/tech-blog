const dashboardRoutes = require('express').Router();
const { Comment, User, Post } = require('../models');
const withAuth = require('../utils/auth');

// GET to all posts 
dashboardRoutes.get('/', withAuth, (req, res) => {
const postData = Post.findAll({where: {userId: req.sessions.userId}})
const posts = postData.map(post => post.get({plain: true}))
res.render('all-posts-admin', {layout: 'dashboard', posts})
if (err) throw err
})

// GET to dashboard 
dashboardRoutes.get('/new-post'), withAuth, (req, res) => {
res.render('new-post', {layout: 'dashboard'})
if (err) throw err
}

// GET id of edited Post route (PUT)
dashboardRoutes.get('/edit/:id'), withAuth, (req, res) => {
const postData = Post.findByPk(req.params.id)
const editedPosts = postData.get({plain: true})
res.render('edit-post', {layout: 'dashboard', editedPosts})
if (err) throw err
}

module.exports = dashboardRoutes;