const { Model, DataTypes } = require("sequelize/types");
const Materialpastoralcat = require("./material-pastoral-cat");



class Materialpastoral extends Model{};



Materialpastoral.init({
    nombre:{
        type:DataTypes.TEXT
    },
    logo:{
        type:DataTypes.STRING
    },
    idUsuario:{
        type:DataTypes.INTEGER
    }
},{
    tableName:'material_pastoral'
});

/* Relacion clase materialpastoral - mat - cat */
Materialpastoral.hasMany(Materialpastoralcat,{
    as:'materialpastoralcat',
    foreignKey:'idMateriaPastoral'
});

Materialpastoralcat.belongsTo(Materialpastoral,{
    foreignKey:'idMateriaPastoral',
    sourcekey:'id'
});


module.exports = Materialpastoral