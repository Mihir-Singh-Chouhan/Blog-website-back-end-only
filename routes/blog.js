const express = require('express')
const {getAllBlogs,createBlogs,updateBlog,deleteBlogs} = require('../controller/blogC')
const router = express.Router()

router.get('/',getAllBlogs);
router.post('/create',createBlogs)
router.put('/update/:id',updateBlog)
router.delete('/delete/:id',deleteBlogs)


module.exports = router;
