const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000


router.get('/api', (req,res)=> {
    res.json({
        'All Products': `http://localhost:${PORT}/api/product`,
    })
})

const productRoutes = require('./api/productRoutes')
router.use('/api/product', productRoutes)

// router.get('/product/:id', (req,res) =>{
//     const id = req.params.id
//     const url = `http://localhost:${PORT}/api/product/${id}`

//     const fetch = (...args) => import('node-fetch').then(({ default: fetch})=> fetch(...args))

//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         res.render('pages/product-single', {
//             name: `${data.name}`,
//             description: `${data.description}`,
//             image: `${data.image}`,
//             price: `${data.price}`,
//             data
//         })
//     })
// })


module.exports = router