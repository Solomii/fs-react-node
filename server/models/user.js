'use strict';
const { Model } = require('sequelize');
const { isAfter } = require('date-fns');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      User.hasMany(models.Task, {
        foreignKey: 'userId' // 'user_id'
      });
      User.belongsToMany(models.Group, {
        through: 'users_to_groups',
        foreignKey: 'userId'
      });
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        field: 'first_name',
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      lastName: {
        type: DataTypes.STRING,
        field: 'last_name',
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
          isEmail: true
        }
      },
      password: {
        type: DataTypes.TEXT,
        field: 'password_hash',
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        },
        set (value) {
          // Storing passwords in plaintext in the database is terrible.
          // Hashing the value with an appropriate cryptographic hash function is better.
          this.setDataValue('password', 'hash');
        }
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
          isValidDate (value) {
            if (isAfter(new Date(value), new Date())) {
              throw new Error('check birthday');
            }
          }
        }
      },
      isMale: {
        type: DataTypes.BOOLEAN,
        field: 'is_male',
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      }
    },
    {
      sequelize,
      modelName: 'User',
      freezeTableName: true,
      tableName: 'users',
      underscored: true
    }
  );
  return User;
};
