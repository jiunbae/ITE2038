module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define('Store', {
    store_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    sname: DataTypes.STRING(64),
    address: DataTypes.STRING(64),
    phone_nums: DataTypes.STRING(64),
    lat: DataTypes.STRING(64),
    lng: DataTypes.STRING(64),
    schedules: DataTypes.JSON,
  }, {
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
  });

  Store.associate = m => {
    m.Store.belongsTo(m.Seller, {
      foreignKey: 'seller_id',
    });

    m.Store.hasMany(m.Order, {
      as: 'Order',
      foreignKey: 'store_id', 
    })
  };

  return Store;
};