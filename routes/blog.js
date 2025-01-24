const express = require('express')
const multer = require('multer')
const {getAllBlogs,createBlogs,updateBlog,deleteBlogs} = require('../controller/blogC')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
   
  const upload = multer({ storage: storage });
   
const router = express.Router()

router.get('/',getAllBlogs);
router.post('/create',createBlogs)
router.put('/update/:id',upload.single("coverImage"),updateBlog)
router.delete('/delete/:id',deleteBlogs)


module.exports = router;
