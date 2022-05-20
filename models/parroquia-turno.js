const { Model, DataTypes } = require("sequelize/types");
const Parroquiamisa = require("./parroquia-misa");

class Parroquiaturno extends Model{};

Parroquiaturno.init({
    nombre:{
        type:DataTypes.STRING
    }
},{
    tableName:'parroquia_turno'
});


/* Relacion clase turno - parroquia - secretaria */
Parroquiaturno.hasMany(Parroquiasecretaria,{
    as:'turnosecretaria',
    foreignKey:'idTurno'
});

Parroquiasecretaria.belongsTo(Parroquiaturno,{
    foreignKey:'idTurno',
    sourcekey:'id'
});

/* Relacion clase turno - parroquia - misa */
Parroquiaturno.hasMany(Parroquiamisa,{
    as:'turnomisa',
    foreignKey:'idTurno'
});

Parroquiamisa.belongsTo(Parroquiaturno,{
    foreignKey:'idTurno',
    sourcekey:'id'
});


module.exports = Parroquiaturno