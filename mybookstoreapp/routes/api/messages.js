const User = require('../../db').User
const Book = require('../../db').Books
const Message= require('../../db').Message
const route = require('express').Router()

route.post('/', (req, res) => {
    Message.create({
        SenderId:req.body.sender,
        RecieverId:req.body.reciever,
        BookId:req.body.book,
        text:req.body.message
    }).then((mess) => {
        res.status(201).send(mess)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not send message"
        })
    })
})

route.post('/getmessages', (req, res) => {
    Message.findAll({
        where:{ RecieverId:req.body.id },
        include:[{
            model:Book,
            as:'Book'
        },
        {
            model:User,
            as:'Sender'
        },
        {
            model:User,
            as:'Reciever'
        }]
    }).then((wish) => {
        res.status(200).send(wish)
    }).catch((err) => {
        res.status(500).send({
            error: "Could find user's wishlist"
        })
    })
})

exports = module.exports = route