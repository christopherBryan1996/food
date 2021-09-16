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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    abstract:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    points:{
      type: DataTypes.INTEGER
    },
    nutritionlevel:{
      type:DataTypes.INTEGER
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