const { Model, DataTypes } = require("sequelize/types");



class Iniciacioncristianacat extends Model{};



Iniciacioncristianacat.init({
    titulo:{
        type:DataTypes.STRING
    },
    descripcion:{
        type:DataTypes.STRING
    },
    fecha:{
        type:DataTypes.CHAR
    },
    ano:{
        type:DataTypes.CHAR
    },
    idIniciacionCristiana:{
        type:DataTypes.INTEGER
    }
},{
    tableName:'iniciacion_cristiana_cat'
});


module.exports = Iniciacioncristianacat