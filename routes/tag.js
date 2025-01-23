const express = require('express')
const router = express.Router()
const {allTags,createTags,updateTags,deleteTags} = require('../controller/tagC')

router.get('/',allTags)
router.post('/create',createTags)
router.put('/update/:id',updateTags)
router.delete('/delete/:id',deleteTags)


module.exports = router