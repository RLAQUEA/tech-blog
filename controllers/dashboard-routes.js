const dashboardRoutes = require('express').Router();
const { Comment, User, Post } = require('../models');
const withAuth = require('../utils/auth');

// GET to all posts 
dashboardRoutes.get('/', withAuth, (req, res) => {
post.findAll()
})

// GET to dashboard 
dashboardRoutes.get('/dashboard'), withAuth, (req, res) => {

}

// GET id of edited Post route (PUT)
dashboardRoutes.get('/dashboard'), withAuth, (req, res) => {

}


module.exports = dashboardRoutes;