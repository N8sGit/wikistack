var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistacks');


var Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },





//possible problem with get
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false,
        isUrl: true,
        get: function(){
          var wiki = '/wiki/'
          return wiki + this.getDataValue(urlTitle)
        }
      },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed'),
        allowNull: true
    },

    date: {
       type: Sequelize.DATE,
       defaultValue: Sequelize.NOW
   }


});

var User = db.define('user', {
    name: {
        validate:{
          isAlphanumeric: true
        },

        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,

        validate:{
          isEmail: true

        }
    }
});


module.exports = {
  Page: Page,
  User: User
};