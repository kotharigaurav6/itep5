import express from 'express';
import path from 'path';
import indexRouter from './routes/index.js';

var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.listen("4000",()=>{
  console.log("Server connection successfull");
});