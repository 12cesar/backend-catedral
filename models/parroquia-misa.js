const { Model, DataTypes } = require("sequelize/types");



class Parroquiamisa extends Model{};



Parroquiamisa.init({
    horario:{
        type:DataTypes.STRING
    },
    idParroquia:{
        type:DataTypes.INTEGER
    },
    idTurno:{
        type:DataTypes.INTEGER
    }
},{
    tableName:'parroquia_misa'
});


module.exports = Parroquiamisa