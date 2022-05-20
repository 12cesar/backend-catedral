const { Model, DataTypes } = require("sequelize/types");
const User = require("./user");



class Rol extends Model{};



Rol.init({
    nombre:{
        type:DataTypes.STRING
    },
    habilitado:{
        type:DataTypes.TINYINT,
        defaultValue:1
    }
},{
    tableName:'rol'
});

/* Relacion clase rol - usuario */
Rol.hasMany(User,{
    as:'rolusuario',
    foreignKey:'idRol'
});

User.belongsTo(Rol,{
    foreignKey:'idRol',
    sourceKey:'id'
})


module.exports = Rol