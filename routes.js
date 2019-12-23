var express = require('express');
var router = express.Router();
var Employee = require('./model');


router.get('/', function(req, res){
     Employee.getEmployees(function(err,employees){
         if(err) throw err;
         res.json(employees);
     });
 })


router.post('/', function(req, res){
    var newEmployee = {
        unique_id: req.body.unique_id,
        name: req.body.name,
        salary: req.body.salary,
        emp_type: 
        req.body.emp_type,
        emp_seniorityposition: req.body.emp_seniorityposition,
        emp_value : req.body.emp_value
    }
     Employee.addEmployee(newEmployee,function(err,employee){
         if(err) throw err;
         res.json(employee);
     });
 })

 


 router.get('/empmaxSalary',function(req, res){
    var Salary = req.body.salary;
    Employee.find (Salary).then((empmaxSalary)=>{
        res.send({success:true,
            MSG:'Emp Max Salary Found',
            empData: empmaxSalary
        })
    })
});




router.get('/empavgSalary',function(req, res){

    var EmpType = req.body.emp_type;
    var EmpSeniorityPosition = req.body.emp_seniorityposition;
    var AvgSalary = req.body.salary;
    Employee.find(AvgSalary).toArray(function (err, result) {
        var i, count, avg= 0.0 , sum=0;
        for (i = 0, count = result.length; i < count; i++) {
            propArray.push((result[i]));
            sum = sum + result[i];
        }
        avg= sum/count;
        
        return res.json(avg);
      })
   
});









 
module.exports = router;
