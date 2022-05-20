const { Model, DataTypes } = require("sequelize/types");



class Oracionescat extends Model{};



Oracionescat.init({
    titulo:{
        type:DataTypes.STRING
    },
    descripcion:{
        type:DataTypes.TEXT
    },
    logo:{
        type:DataTypes.STRING
    },
    idOraciones:{
        type:DataTypes.INTEGER
    }
},{
    tableName:'oraciones_cat'
});


module.exports = Oracionescat