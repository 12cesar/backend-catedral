const { Model, DataTypes } = require("sequelize/types");
const Iniciacioncristianacat = require("./iniciacion-cristiana-cat");



class Iniciacioncristiana extends Model{};



Iniciacioncristiana.init({
    nombre:{
        type:DataTypes.STRING
    },
    logo:{
        type:DataTypes.STRING
    },
    idUsuario:{
        type:DataTypes.INTEGER
    }
},{
    tableName:'iniciacion_cristiana'
});

/* Relacion clase iniciacioncrist - iniciacioncrist - cat */
Iniciacioncristiana.hasMany(Iniciacioncristianacat,{
    as:'iniciacioncristianacat',
    foreignKey:'idIniciacionCristiana'
});

Iniciacioncristianacat.belongsTo(Iniciacioncristiana,{
    foreignKey:'idIniciacionCristiana',
    sourcekey:'id'
});



module.exports = Iniciacioncristiana