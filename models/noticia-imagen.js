const { Model, DataTypes } = require("sequelize/types");
const Noticias = require("./noticias");



class Noticiaimagen extends Model{};



Noticiaimagen.init({
    nombre:{
        type:DataTypes.STRING
    },
    idNoticia:{
        type:DataTypes.INTEGER
    }
},{
    tableName:'noticia_imagen'
});





module.exports = Noticiaimagen