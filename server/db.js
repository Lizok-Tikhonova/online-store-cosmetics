const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    'salon_shop',
    'postgres',
    '0000',
    {
        'host':'localhost',
        'dialect':'postgres'
    }
)