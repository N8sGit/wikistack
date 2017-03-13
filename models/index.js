var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistacks');


var Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false,
        isUrl: true
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed'),
        allowNull: true
    }
});

var User = db.define('user', {
    name: {
        isAlphanumeric: true,
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true
    }
});


module.exports = {
  Page: Page,
  User: User
};
