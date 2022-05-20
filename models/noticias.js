const { Model, DataTypes } = require("sequelize/types");



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
    tableName:'noticias'
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