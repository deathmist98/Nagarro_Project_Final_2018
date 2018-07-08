const User = require('../../db').User
const route = require('express').Router()

route.get('/', (req, res) => {
    User.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrive users"
            })
        })

})

route.post('/', (req, res) => {
    User.create({
        name: req.body.name,
        email:req.body.email,
         password:req.body.password,
    college:req.body.college,
    address:req.body.address,
    mobile:req.body.mobile
    }).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new user"
        })
    })
})

route.post('/getuser', (req, res) => {
    User.findOne({
        where:req.body
    }).then((user) => {
        res.status(202).send(user)
    }).catch((err) => {
        res.status(502).send({
            error: "Could find user"
        })
    })
})

exports = module.exports = route