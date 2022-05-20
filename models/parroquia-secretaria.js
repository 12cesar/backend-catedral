const { Model, DataTypes } = require("sequelize/types");



class Parroquiasecretaria extends Model{};



Parroquiasecretaria.init({
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
    tableName:'parroquia_secretaria'
});


module.exports = Parroquiasecretaria