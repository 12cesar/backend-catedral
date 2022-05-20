const { Model, DataTypes } = require("sequelize/types");



class Ministeriocat extends Model{};



Ministeriocat.init({
    titulo:{
        type:DataTypes.STRING
    },
    descripcion:{
        type:DataTypes.TEXT
    },
    fecha:{
        type:DataTypes.CHAR
    },
    ano:{
        type:DataTypes.CHAR
    },
    idMinisterio:{
        type:DataTypes.INTEGER
    }
},{
    tableName:'ministerio_cat'
});


module.exports = Ministeriocat