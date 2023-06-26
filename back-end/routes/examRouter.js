const express = require("express");
const examRouter = express.Router();
const examController = require("../controller/examController");

examRouter
  .route("/")
  .get(examController.randomExam)
  .post(examController.examResult);


module.exports = examRouter;
