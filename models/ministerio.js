const { Model, DataTypes } = require("sequelize/types");
const Ministeriocat = require("./ministerio-cat");



class Ministerio extends Model{};



Ministerio.init({
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
    tableName:'ministerio'
});

/* Relacion clase ministerio - minist - cat */
Ministerio.hasMany(Ministeriocat,{
    as:'ministeriocat',
    foreignKey:'idMinisterio'
});

Ministeriocat.belongsTo(Ministerio,{
    foreignKey:'idMinisterio',
    sourcekey:'id'
});




module.exports = Ministerio