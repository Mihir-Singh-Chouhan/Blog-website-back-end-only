const express = require('express')
const router = express.Router()
const { allComments,createComments,updateComments,deleteComments} = require('../controller/commentC')

router.get('/',allComments)
router.post('/create',createComments)
router.put('/update/:id',updateComments)
router.delete('/delete/:id',deleteComments)

module.exports = router;