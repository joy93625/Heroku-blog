const Sequelize = require('sequelize');

const sequelize = new Sequelize('mydb', 'hsuan', 'hsuan', {
host: '192.168.64.4',
    dialect: 'mysql'
});

const Article = sequelize.define('article', {
    username: {
        type: Sequelize.STRING,
    },
    title: {
        type: Sequelize.STRING,
    },
    content: {
        type: Sequelize.TEXT,
    }
})
sequelize.sync().then( () => {
    console.log('created!')
})

