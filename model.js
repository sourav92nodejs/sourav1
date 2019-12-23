var mongoose = require('mongoose');
var empSchema = new mongoose.Schema({
    unique_id : String,
    name : String,
    salary : Number,
    emp_type:{
        emp_seniorityposition: String,
        emp_value : Boolean,
    }
})

var Employee = module.exports = mongoose.model('Employee', empSchema);

module.exports.getEmployees = function(callback){
    Employee.find(callback);
}


module.exports.addEmployee = function(newEmployee, callback){
    Employee.create(newEmployee, callback);
}



Employee.aggregate({$group : {_id :"$unique_id" , "Empmaxsalary" :{$max : "$salary"}}},  function( data){
          console.log('aggregated data')
          console.log(data)
     })





Employee.aggregate( { $match : { "$emp_type.emp_seniorityposition" : "junior"} } , {$group : {_id :"$unique_id" , "Empavgsalary" :{$avg : {$divide :[{$sum : { distinct : "$salary" }}, {$count : { distinct : "$emp_type.emp_seniorityposition"}}]}}}},  function( data){
        console.log('aggregated data')
        console.log(data)
   })












