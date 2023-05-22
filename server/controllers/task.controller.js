const { Task } = require('../models');

// module.exports.createTask = async (req, res, next) => {
//     try {
//         const {
//             body,
//             params: { idUser },
//         } = req;
//         const task = await Task.create({ ...body, userId: idUser });
//         res.status(201).send({ data: task });
//     } catch (error) {
//       console.log("Error", error);
//         // next(error);
//     }
// };

module.exports.createTask = async (req, res, next) => {
  try {
    const { body, userInstance } = req;
    const task = await userInstance.createTask(body);
    res.status(201).send({ data: task });
  } catch (error) {
    next(error);
  }
};

module.exports.getUserTasks = async (req, res, next) => {
  try {
    const { userInstance, pagination } = req;
    const tasks = await userInstance.getTasks(pagination);
    if (tasks.length === 0) {
      return res.status(204).send();
    }
    res.status(200).send({ data: tasks });
  } catch (error) {
    next(error);
  }
};

module.exports.updateTask = async (req, res, next) => {
  try {
    const { body, taskInstance } = req;
    const updateTask = await taskInstance.update(body);
    res.status(200).send({ data: updateTask });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteTask = async (req, res, next) => {
  try {
    const { taskInstance } = req;
    await taskInstance.destroy();
    res.status(200).send({ data: taskInstance });
  } catch (error) {
    next(error);
  }
};
