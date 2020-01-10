module.exports = function(sequelize, DataTypes) {
    var userFavorites = sequelize.define("userFavorites", {
     
      //Book, movie, or news
      Type: {
        type: DataTypes.STRING,
      },
      //data returned from the external APIs that are chosen by the user
      Data: {
        type: DataTypes.TEXT,
      },
    });

    // userFavorites.associate = function(models) {
    //   userFavorites.belongsTo(models.userInfo, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    //};

    return userFavorites;
  };
  