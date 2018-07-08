const Sequelize = require('sequelize')
const op = Sequelize.Op;

const db = new Sequelize('mybookstoredb', 'project', 'project', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail:true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    college: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    mobile: {
        type: Sequelize.BIGINT(10),
        allowNull: false,
    }
})

const Books = db.define('books', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    condition: {
        type: Sequelize.ENUM,
        values:['New','Almost New','Slight Damaged','Worn']
    }
});
Books.belongsTo(User,{as:'seller'});

const Wishlist = db.define('wishlists', {});
Wishlist.belongsTo(User);
Wishlist.belongsTo(Books);


const Message = db.define('messages', {
    text: {
        type: Sequelize.TEXT,
    },
});

Message.belongsTo(User,{as:'Sender'});
Message.belongsTo(User,{as:'Reciever'});
Message.belongsTo(Books,{as:'Book'});

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    User,Books,Wishlist,Message,op
}