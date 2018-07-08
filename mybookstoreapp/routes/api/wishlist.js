const wishlist = require('../../db').Wishlist
const Book = require('../../db').Books
const route = require('express').Router()

route.post('/', (req, res) => {
    wishlist.findOrCreate({
        where:{
            userId:req.body.userid,
            bookId:req.body.bookid
        }
    }).then((wish) => {
        res.status(201).send(wish)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new book to wishlist"
        })
    })
})

route.post('/getwishlist', (req, res) => {
    wishlist.findAll({
        where:{ userId:req.body.userid },
        include:[{
            model:Book
        }]
    }).then((wish) => {
        res.status(200).send(wish)
    }).catch((err) => {
        res.status(500).send({
            error: "Could find user's wishlist"
        })
    })
})

route.post('/remove', (req, res) => {
    wishlist.destroy({
        where:{ 
            userId:req.body.userid,
            bookId:req.body.bookid }
    }).catch((err) => {
        res.status(503).send({
            error: "Could remove"
        })
    })
})
exports = module.exports = route