const { Model, DataTypes } = require("sequelize/types");
const Cancionero = require("./cancionero");
const Iniciacioncristiana = require("./iniciacion-cristiana");
const Liturgia = require("./liturgia");
const Materialpastoral = require("./material-pastoral");
const Ministerio = require("./ministerio");
const Noticias = require("./noticias");
const Oraciones = require("./oraciones");
const Parroquia = require("./parroquia");

class User extends Model{};

User.init({
    nombre:{
        type:DataTypes.STRING
    },
    apellido:{
        type:DataTypes.STRING
    },
    usuario:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    habilitar:{
        type:DataTypes.TINYINT,
        defaultValue:1
    },
    img:{
        type:DataTypes.STRING
    },
    idRol:{
        type:DataTypes.INTEGER
    }
},{
    tableName:'usuario'
});

/* Relacion clase usuario noticia */
User.hasMany(Noticias,{
    as:'usuarionoticia',
    foreignKey:'idUsuario'
});

Noticias.belongsTo(User,{
    foreignKey:'idUsuario',
    sourceKey:'id'
});

/* Relacion clase usuario oraciones */
User.hasMany(Oraciones,{
    as:'usuariooraciones',
    foreignKey:'idUsuario'    
});

Oraciones.belongsTo(User,{
    foreignKey:'idUsuario',
    sourceKey:'id'
})
/* Relacion clase usaurio - liturgia */

User.hasMany(Liturgia,{
    as:'usuarioliturgia',
    foreignKey:'idUsuario'
});

Liturgia.belongsTo(User,{
    foreignKey:'idUsuario',
    sourceKey:'id'
})

/* Relacion clase usuario - ministerio */
User.hasMany(Ministerio,{
    as:'usuarioministerio',
    foreignKey:'idUsuario'
});

Ministerio.belongsTo(User,{
    foreignKey:'idUsuario',
    sourceKey:'id'
});

/* Relacion usuario - ini- crist */
User.hasMany(Iniciacioncristiana,{
    as:'usuarioinccristiana',
    foreignKey:'idUsuario'
});

Iniciacioncristiana.belongsTo(User,{
    foreignKey:'idUsuario',
    sourceKey:'id'
}).

/* Relacion usuario - mater- pastoral */
User.hasMany(Materialpastoral,{
    as:'usuariomatepastoral',
    foreignKey:'idUsuario'
});

Materialpastoral.belongsTo(User,{
    foreignKey:'idUsuario',
    sourceKey:'id'
})

/* Relacion usuario - cancionero */
User.hasMany(Cancionero,{
    as:'usuariocancionero',
    foreignKey:'idUsuario'
});

Cancionero.belongsTo(User,{
    foreignKey:'idUsuario',
    sourceKey:'id'
})

/* Relacion usuario - parorquia */
User.hasMany(Parroquia,{
    as:'usuarioparroquia',
    foreignKey:'idUsuario'
});

Parroquia.belongsTo(User,{
    foreignKey:'idUsuario',
    sourceKey:'id'
})
module.exports = User;