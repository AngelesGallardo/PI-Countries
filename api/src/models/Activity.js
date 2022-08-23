const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('activity', {
      
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
      },

      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            isInt: true,
            min: 1,  
            max: 5
        }
      },

      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            isInt: true, 
        }
      },

      season: {
        type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),        
        allowNull: false,    
      }, 

    }, {
      timestamps: false
    });
};
  