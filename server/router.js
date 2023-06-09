// const { Router } = require("express");
// const UserController = require("./controllers/user.controllers");
// const TaskController = require("./controllers/task.controller");
// const { checkUser } = require("./middlewares/user.mw");
// const {checkTask,checkIsUserTask} = require("./middlewares/task.mw")
// const { paginate } = require("./middlewares/paginate.mw");
// const router = Router();

// // http://localhost:3000/api/users
// router.post("/users", UserController.createUser);
// router.get("/users",paginate, UserController.getAllUsers);

// router.get("/users/:idUser", checkUser,UserController.getUserByPk);

// router.put("/users/:idUser/static", UserController.updateUserStatic);
// router.put("/users/:idUser/instance", UserController.updateUserInstance);

// router.delete("/users/:idUser/instance", UserController.deleteUserInstance);

// router.post("/users/:idUser/tasks", checkUser, TaskController.createTask);

// router.get(
//     "/users/:idUser/tasks",
//     checkUser, paginate,
//     TaskController.getUserTasks
// );

// router.patch(
//     "/users/:idUser/tasks/:idTask",
//     checkUser,
//     checkTask,
//     checkIsUserTask,
//     TaskController.updateTask
// );

// router.delete(
//     "/users/:idUser/tasks/:idTask",
//     checkUser,
//     checkTask,
//     checkIsUserTask,
//     TaskController.deleteTask
// );

// module.exports = router;
