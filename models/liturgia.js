const { Model, DataTypes } = require("sequelize/types");
const Liturgiacat = require("./liturgia-cat");



class Liturgia extends Model{};



Liturgia.init({
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
    tableName:'liturgia'
});


/* Relacion clase liturgia - litur - cat */
Liturgia.hasMany(Liturgiacat,{
    as:'liturgiacat',
    foreignKey:'idLiturgia'
});

Liturgiacat.belongsTo(Liturgia,{
    foreignKey:'idLiturgia',
    sourcekey:'id'
});



module.exports = Liturgia