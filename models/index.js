var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');


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
    },

    date: {
       type: Sequelize.DATE,
       defaultValue: Sequelize.NOW
   }

 },

 {
        getterMethods: {
            url : function(){
            var wiki = '/wiki/'
            return wiki + this.urlTitle
            }
          }
 });

Page.hook('beforeValidate', function(page, options) {
  if (page.title) {
    page.urlTitle =  page.title.replace(/\s+/g, '_').replace(/\W/g, '');
  } else {
    page.urlTitle = Math.random().toString(36).substring(2, 7);
  }
})





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


var test = 'yay'




module.exports = {
  Page: Page,
  User: User
};
