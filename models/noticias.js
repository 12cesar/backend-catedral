const { Model, DataTypes } = require("sequelize/types");


const sequelize = require('../dataBase/dbCatedral');
class Noticias extends Model{};



Noticias.init({
    titulo:{
        type:DataTypes.STRING
    },
    fecha:{
        type:DataTypes.CHAR
    },
    ano:{
        type:DataTypes.CHAR
    },
    descripcion:{
        type:DataTypes.TEXT
    },
    link:{
        type:DataTypes.STRING
    },
    habilitado:{
        type:DataTypes.TINYINT
    },
    idUsuario:{
        type:DataTypes.INTEGER
    }
},{
    sequelize,
    tableName:'noticias',
    timestamps:false
});

/* Relacion clase noticia - noti - imagen */
Noticias.hasMany(Noticiaimagen,{
    as:'noticiasimagen',
    foreignKey:'idNoticias'
});

Noticiaimagen.belongsTo(Noticias,{
    foreignKey:'idNoticias',
    sourceKey:'id'
});







module.exports = Noticias;