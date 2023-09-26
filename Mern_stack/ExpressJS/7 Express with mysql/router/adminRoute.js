import express from 'express';
import {adminViewUserController,adminLogoutController} from '../controller/adminController.js';

var adminRouter = express.Router();

adminRouter.get("/viewuser",adminViewUserController);
adminRouter.get("/logout",adminLogoutController);

export default adminRouter;