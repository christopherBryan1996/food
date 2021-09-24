const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      unique: true,//no se puede repetir
      primaryKey:true,//lave primaria
      allowNull:false//sin null
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type:DataTypes.TEXT
    },
    summary:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    weightWatcherSmartPoints:{
      type: DataTypes.INTEGER
    },
    healthScore:{
      type:DataTypes.STRING
    },
    guide:{
      type:DataTypes.TEXT
    }
  });
};
// Receta con las siguientes propiedades:
// ID: *
// Nombre *
// Resumen del plato *
// Puntuación
// Nivel de "comida saludable"
// Paso a paso