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
        allowNull: true,
        validate: {
            isNumeric: true,
            isInt: true,
            min: 1,  
            max: 5
        }
      },

      duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isNumeric: true,
            isInt: true, 
        },
        get() {        
            const duracionValue = this.getDataValue('duration');
            return duracionValue ? `${duracionValue} minutos` : null
            },
      },

      season: {
        type: DataTypes.ENUM('verano', 'otoño', 'invierno', 'primavera'),        
        allowNull: true,    
      }, 

    }, {
      timestamps: false
    });
};
  