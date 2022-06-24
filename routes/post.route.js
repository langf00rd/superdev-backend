const express = require('express')
const router = express.Router()
const postService = require('../service/post.service')

router.post('/add-post', postService.addPost)
router.post('/get-posts-by-tags', postService.getPostsByTags)
router.get('/get-post/:title', postService.getPost)
router.get('/get-posts', postService.getPosts)
router.get('/search-posts/:query', postService.searchPosts)
// router.post('/update-username', postService.updateUsername)
// router.get('/get-user/:email', postService.getUser)
// router.get('/get-all-users', postService.getAllUsers)
// router.get('/get-user-by-username/:username', postService.getUserByUsername)
// router.get('/check-username-exists/:username', postService.checkUsernameExists)

module.exports = router