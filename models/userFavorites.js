module.exports = function(sequelize, DataTypes) {
    var userFavorties = sequelize.define("userFavorites", {
      userID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Data: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });
    return userFavorties;
  };
  