import express from 'express';
import { userRegistrationController,userLoginController,userListController } from '../controller/userController.js';
var userRouter = express.Router();

userRouter.post("/register",userRegistrationController);
userRouter.post("/login",userLoginController);
userRouter.get("/viewusers",userListController);

export default userRouter;