const NotFoundError = require("../errors/NotFoundError");
const { User } = require("../models");
const createError = require("http-errors");

module.exports.checkUser = async (req, res, next) => {
    try {
        const {
            params: { idUser },
            idUserForTask
        } = req;
        const user = await User.findByPk(idUser, {
            attributes: { exclude: ["password"] },
        });
        if (!user) {
            // throw new Error('user not found')
            return next(new NotFoundError("!!!!user not found!!!"))
        }
        // user.password = undefined;
        req.userInstance = user;
        next();
    } catch (error) {
        next(error);
    }
};


