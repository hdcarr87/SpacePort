module.exports = function(sequelize, DataTypes) {
    var userFavorties = sequelize.define("userFavorites", {
      //user ID that user entered on homepage (same userID as the userInfo table)
      userID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //Book, movie, or news
      Type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //data returned from the external APIs that are chosen by the user
      Data: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });
    return userFavorties;
  };
  