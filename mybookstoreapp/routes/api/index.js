const route = require('express').Router()

route.use('/users', require('./users'))
route.use('/books', require('./books'))
route.use('/wishlist', require('./wishlist'))
route.use('/messages', require('./messages'))

exports = module.exports = {
    route
}