const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('activity', {
      
      nombre: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },

      dificultad: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isNumeric: true,
            isInt: true,
            min: 1,  
            max: 5
        }
      },

      duracion: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isNumeric: true,
            isInt: true, 
        },
        get() {        
            const duracionValue = this.getDataValue('duracion');
            return duracionValue ? `${duracionValue} minutos` : null
            },
      },

      temporada: {
        type: DataTypes.ENUM('verano', 'otoño', 'invierno', 'primavera'),        
        allowNull: true,    
      }, 

    }, {
      timestamps: false
    });
};
  