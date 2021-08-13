const postRoutes = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

//POST to add a new blog post
postRoutes.post('/', withAuth, (req, res) => {
const newPost = Post.create({...req.body, user_id: req.session.user_id})
res.json(newPost)
if(err) throw err
})


//PUT to edit a blog post 
postRoutes.put('/:id', withAuth, (req, res) => {
const [affectedRows] = Post.update(req.body, {where: {id: req.params.id}})
if(affectedRows > 0) {res.status(200).end()}
else {
res.status(404).end()
}
if(err) throw err
}) 


//DELETE a post
postRoutes.delete('/:id', withAuth, (req, res) => {
const [affectedRows] = Post.destroy(req.body, {where: {id: req.params.id}})
if(affectedRows > 0) {res.status(200).end()}
else {
res.status(404).end()
}
    if(err) throw err
}) 


module.exports = postRoutes;