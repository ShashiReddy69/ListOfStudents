const studentModel=require('../Model/list.js');
exports.getList=((req,res)=>{
    res.status(200).json({
        message:"successfully fetched",
        studentsData:studentModel.list})
    //res.json(studentModel.list)
})
// exports.getDataById=((req,res)=>{
//     var getId=req.params.id;
//     var result=studentModel.list.filter(content=>content.id===parseInt(getId));
//     res.status(200).json({
//         message:"got data by id",
//         ById:result
//     })
// })
exports.getDataById=((req,res)=>{
    var getId=req.body.id;
    var result=studentModel.list.filter(content=>content.id===parseInt(getId));
    res.status(200).json({
        message:"got data by id",
        ById:result
    })
})
exports.getStudentData=((req,res)=>{
    var name=req.params.name;
    var result=studentModel.list.filter(content=>content.name.toLowerCase()===name.toLowerCase());
    res.json(result)
});
exports.getStudentDataByClass=((req,res)=>{
    var StudentClass=req.body.class;
    var result=studentModel.list.filter(content=>content.Class===StudentClass);
    res.json(result)
})
exports.getStudentDataByRollNumber=((req,res)=>{
    var RollNumber=req.body.RollNumber.toUpperCase();
    var result=studentModel.list.filter(content=>content.RollNumber===RollNumber);
    res.status(200).json({
        message:"got data by rollNumber",
        ByRollNumber:result
    })
})