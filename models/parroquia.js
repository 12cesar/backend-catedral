const { Model, DataTypes } = require("sequelize/types");
const Parroquiamisa = require("./parroquia-misa");
const Parroquiasecretaria = require("./parroquia-secretaria");



class Parroquia extends Model{};



Parroquia.init({
    nombre:{
        type:DataTypes.STRING
    },
    telefono:{
        type:DataTypes.CHAR
    },
    descripcion:{
        type:DataTypes.TEXT
    },
    lat:{
        type:DataTypes.INTEGER
    },
    lng:{
        type:DataTypes.INTEGER
    },
    link:{
        type:DataTypes.STRING
    },
    imagen:{
        type:DataTypes.STRING
    },
    idUsuario:{
        type:DataTypes.INTEGER
    }
},{
    tableName:'parroquia'
});

/* Relacion clase parroquia - parroquia - secretaria */
Parroquia.hasMany(Parroquiasecretaria,{
    as:'parroquiasecretaria',
    foreignKey:'idParroquia'
});

Parroquiasecretaria.belongsTo(Parroquia,{
    foreignKey:'idParroquia',
    sourcekey:'id'
});

/* Relacion clase parroquia - parroquia - misa */
Parroquia.hasMany(Parroquiamisa,{
    as:'parroquiamisa',
    foreignKey:'idParroquia'
});

Parroquiamisa.belongsTo(Parroquia,{
    foreignKey:'idParroquia',
    sourcekey:'id'
});



module.exports = Parroquia;