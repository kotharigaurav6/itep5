import {StudentController} from '../controller/student.controller.js';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/save', StudentController);

module.exports = router;
