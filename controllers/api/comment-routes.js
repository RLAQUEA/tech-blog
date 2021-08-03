const commentRoutes = require('express').Router();
const { Comment } = require('../../models/Comment');
const withAuth = require('../../utils/auth');

//POST
commentRoutes.post('/', withAuth, (req, res) => {
const newComment = Comment.create({...req.body, userId: req.session.userId})
res.json(newComment)
if(err) throw err
});


//PUT


module.exports = commentRoutes;