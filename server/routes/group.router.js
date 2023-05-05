const path = require('path');
const { Router } = require('express');
const multer = require('multer');
const GroupController = require("../controllers/group.controler")

const upload = multer({
  dest: path.resolve(__dirname, "../public/images")
})

const groupRouter = Router();

// http://localhost:3000/api/groups
groupRouter.post('/', GroupController.createGroup);
http://localhost:3000/api/groups/users/7
groupRouter.get('/users/:idUser', GroupController.getUserGroups);
// http://localhost:3000/api/groups/2
groupRouter.patch('/:idGroup', GroupController.addUserAtGroup);
// http://localhost:3000/api/groups/2/users HTTP/1.1
groupRouter.get('/:idGroup/users', GroupController.getUsersInGroup);

groupRouter.patch('/:idGroup/image',upload.single("image"), GroupController.addImage);

module.exports = groupRouter;
