const { Model, DataTypes } = require("sequelize/types");



class Materialpastoralcat extends Model{};



Materialpastoralcat.init({
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
    idMateriaPastoral:{
        type:DataTypes.INTEGER
    }
},{
    tableName:'material_pastoral_cat'
});


module.exports = Materialpastoralcat