const createError = require('http-errors');
const { Op } = require('sequelize');
const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const newUser = await User.create(body);
    // newUser.password = undefined;
    if (!newUser) {
      return next(createError(400, 'bad request'));
    }
    const user = newUser.get();
    delete user.password;
    console.log(newUser);
    res.status(201).send({ data: user });
  } catch (error) {
    console.log('error', error);
    // next(error);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const { pagination = {} } = req;
    const users = await User.findAll({
      attributes: { exclude: ['password', 'createdAt', 'updateAt'] },
      ...pagination
    });
    if (users.length === 0) {
      return next(createError(404, 'users not found'));
    }
    res.status(200).send({ data: users });
  } catch (error) {
    console.log('error', error);
    // next(error);
  }
};

module.exports.getUserByPk = async (req, res, next) => {
  try {
    const { userInstance } = req;
    const countUsersTasks = await userInstance.countTasks();
    userInstance.dataValues.countTasks = countUsersTasks;
    res.status(200).send({ data: userInstance });
  } catch (error) {
    console.log(error);
  }
};

module.exports.updateUserStatic = async (req, res, next) => {
  try {
    const {
      body,
      params: { idUser }
    } = req;
    const [, [updateUser]] = await User.update(body, {
      where: { id: idUser },
      // returning: ["id","email"],
      returning: true
    });
    updateUser.password = undefined;
    res.status(200).send({ data: updateUser });
  } catch (error) {
    console.log(error);
  }
};

module.exports.updateUserInstance = async (req, res, next) => {
  try {
    const {
      body,
      params: { idUser }
    } = req;
    const userInstance = await User.findByPk(idUser);
    const updateUser = await userInstance.update(body, {
      returning: true
    });
    updateUser.password = undefined;
    res.status(200).send({ data: updateUser });
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteUserInstance = async (req, res, next) => {
  try {
    const {
      params: { idUser }
    } = req;
    const user = await User.findByPk(idUser, {
      attributes: { exclude: ['password'] }
    });
    await user.destroy();

    res.status(200).send({ data: user });
  } catch (error) {
    console.log(error);
  }
};
