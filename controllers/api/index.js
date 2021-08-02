const router = require('express').Router();
const user = require('./user-routes');
const post = require('./post-routes');
const comment = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
