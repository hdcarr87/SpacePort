module.exports = function(sequelize, DataTypes) {
    var userInfo = sequelize.define("userInfo", {
      userID: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6]
        }
      },
      
    });
    return userInfo;
  };
  