const express=require('express');
const router=express.Router()
const studentController=require('../Controller/studentsList.js')
router.get('/studentsList',studentController.getList);
//router.post('/getDataById/:id',studentController.getDataById);
router.post('/getDataById',studentController.getDataById);
router.post('/getStudentData/:name',studentController.getStudentData);
router.post('/getStudentDataByClass',studentController.getStudentDataByClass);
router.post('/getStudentDataByRollNumber',studentController.getStudentDataByRollNumber);
module.exports=router;