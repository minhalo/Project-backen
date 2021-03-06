'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    static associate(models) {}
  };
  File.init({
    lpostId: DataTypes.INTEGER,
    file: DataTypes.TEXT('long'),
    fileName:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'File',
  });
  return File;
};