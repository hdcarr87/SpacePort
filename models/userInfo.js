module.exports = function(sequelize, DataTypes) {
    var userInfo = sequelize.define("userInfo", {
      //ID that the user chooses, must be at least 6 characters
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6]
        }
      },
    
      //password that the user chooses
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        Validate: {
          len: [6]
        }
      }
    });

    // userInfo.associate = function(models) {
    //   userInfo.hasMany(models.userFavorites, {
    //     onDelete: "cascade"
    //   });
    // };
    
    return userInfo;
  };
  