const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('diet',{
        id: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey:true,
            allwNull:false,
        },
        name:{
            type: DataTypes.STRING,
            allwNull:false,
        }
    },{
        timestamps:false
    })
}