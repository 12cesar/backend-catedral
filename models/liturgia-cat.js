const { Model, DataTypes } = require("sequelize/types");



class Liturgiacat extends Model{};



Liturgiacat.init({
    titulo:{
        type:DataTypes.STRING
    },
    subtitulo:{
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
    idLiturgia:{
        type:DataTypes.INTEGER
    }
},{
    tableName:'liturgia_cat'
});


module.exports = Liturgiacat