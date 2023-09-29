import express from 'express';
import {adminViewUserController,adminLogoutController,adminUpdateUserController,adminUpdateDataController,adminDeleteUserController} from '../controller/adminController.js';

var adminRouter = express.Router();

adminRouter.get("/viewuser",adminViewUserController);
adminRouter.get("/updateuser/:email",adminUpdateUserController);
adminRouter.post("/updatedata",adminUpdateDataController);
adminRouter.get("/deleteuser/:email",adminDeleteUserController);
adminRouter.get("/logout",adminLogoutController);

export default adminRouter;