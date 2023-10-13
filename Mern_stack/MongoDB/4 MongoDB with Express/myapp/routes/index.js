import {StudentController,ViewStudentsController,SearchController,SearchByIdController} from '../controller/student.controller.js';

import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/save', StudentController);
router.get('/viewlist', ViewStudentsController);
router.get('/searchform', SearchController);
router.get('/searchstudent', SearchByIdController);

export default router;
