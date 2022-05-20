const { Model, DataTypes } = require("sequelize/types");
const Cancionerocat = require("./cancionero-cat");



class Cancionero extends Model{};



Cancionero.init({
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
    tableName:'cancionero'
});

/* Relacion clase cancionero - canc - cat */
Cancionero.hasMany(Cancionerocat,{
    as:'cancionerocat',
    foreignKey:'idCancionero'
});

Cancionerocat.belongsTo(Cancionero,{
    foreignKey:'idCancionero',
    sourcekey:'id'
});




module.exports = Cancionero