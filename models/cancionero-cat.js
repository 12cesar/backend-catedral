const { Model, DataTypes } = require("sequelize/types");



class Cancionerocat extends Model{};



Cancionerocat.init({
    titulo:{
        type:DataTypes.STRING
    },
    descripcion:{
        type:DataTypes.TEXT
    },
    logo:{
        type:DataTypes.STRING
    },
    idCancionero:{
        type:DataTypes.INTEGER
    }
},{
    tableName:'cancionero_cat'
});


module.exports = Cancionerocat