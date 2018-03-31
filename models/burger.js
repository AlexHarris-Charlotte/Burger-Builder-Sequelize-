module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  // burger.associate = function(models) {
  //   burger.hasMany(models.Post, {
  //     onDelete: "cascade"
  //   });
  // };

  return burger;
};
