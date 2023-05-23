const express = require('express')
const router = express.Router()

const { productDao: dao } = require('../../daos/dao')

/**
 * GET METHODS
 */

// localhost:3000/api/product
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})


// localhost:3000/api/product
router.get('/sort', (req,res)=>{ 
    dao.sort(req,res)
})

router.get('/:id', (req, res)=> {
    dao.findbyId(res, dao.table, req.params.id)
})

/**
 * POST METHOD
 */
router.post('/create', (req, res)=> {
    dao.create(req, res)
})

/**
 * PATCH METHOD
 */
router.patch('/update/:id', (req, res)=> {
    dao.update(req, res)
})

module.exports = router 