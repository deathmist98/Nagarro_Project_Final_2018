const Book = require('../../db').Books
const Op = require('../../db').op
const route = require('express').Router()


route.get('/', (req, res) => {
    Book.findAll({
        where:{}
    })
        .then((books) => {
            res.status(200).send(books)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrive users"
            })
        })

})
route.post('/', (req, res) => {
    Book.create({
        sellerId:req.body.sellerId,
        name:req.body.name,
        author:req.body.author,
        price:req.body.price,
        condition:req.body.condition
    }).then((books) => {
        res.status(201).send(books)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new book"
        })
    })
})

route.post('/filter', (req, res) => {
    
    
    Book.findAll({
        where:req.body
    })
        .then((books) => {
            res.status(202).send(books)
        })
        .catch((err) => {
            res.status(502).send({
                error: "Could not retrive users"
            })
        })

})

route.post('/pricefilter', (req, res) => {
    
    
    Book.findAll({
        where:{
            price:{
                [Op.and]:{
                    [Op.gte]:req.body.min,
                    [Op.lte]:req.body.max
                } 
            }
    }
    })
        .then((books) => {
            res.status(202).send(books)
        })
        .catch((err) => {
            res.status(502).send({
                error: "Could not retrive users"
            })
        })

})

exports = module.exports = route