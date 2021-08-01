//Get route for getting all blog posts
const router = require('express').Router();
const { Comment, User, Post } = require('./models');

// GET all blog posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogData = await Post.findAll({
      include: [
        {
          model: Post,
          attributes: ['title', 'body']
        },
      ],
    });
const allPosts = dbBlogData.map((post) => post.get({plain: true})
);
    //The render method acts on the Handlebars.js template and connects the route to its appropriate templiate
    // res.render('all');
    res.render('homepage', {
      allPosts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog post
router.get('/post/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: [
            'id',
            'username',
            'date',
            'comments',
          ],
        },
      ],
    });

    const post = dbPostData.get({ plain: true });
    res.render('post', { post });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// const comments = dbBlogData.map((comment) =>
// gallery.get({ plain: true })
// );


module.exports = router;
