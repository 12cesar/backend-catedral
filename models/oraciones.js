const { Model, DataTypes } = require("sequelize/types");
const Oracionescat = require("./oraciones-cat");



class Oraciones extends Model{};



Oraciones.init({
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
    tableName:'oraciones'
});

/* Relacion clase oraciones - orac - cat */
Oraciones.hasMany(Oracionescat,{
    as:'oracionescat',
    foreignKey:'idOraciones'
});

Oracionescat.belongsTo(Oraciones,{
    foreignKey:'idOraciones',
    sourcekey:'id'
});




module.exports = Oraciones