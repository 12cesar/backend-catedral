require('dotenv').config();

const { Sequelize } = require('sequelize');


    const sequelize = new Sequelize('vap','root','root2022',{
        dialect:'mysql',
        host:'localhost',
        
    });
    

module.exports = sequelize;