const express = require('express')
const {allCategory,createCategory,updateCategory,deleteCategory} = require('../controller/categoryC')
const router = express.Router()

router.get('/',allCategory)
router.post('/create',createCategory)
router.put('/update/:id',updateCategory)
router.delete('/delete/:id',deleteCategory)

module.exports = router;