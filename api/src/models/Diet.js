const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('diet',{
        id: {
            type: DataTypes.UUID,
            unique: true,
            primaryKey:true,
            allwNull:false,
        },
        name:{
            type: DataTypes.UUID
        }
    })
}