const express = require('express');
const connection = require('../connection');
const router = express.Router();


router.post('/create',(req,res)=>{
    let Employee = req.body;
    var insertQuery = 'insert into employee_details(NAME,EMAIL_ID,MOBILE_NUMBER,ADDRESS,DEPARTMENT,CITY,GENDER) values(?,?,?,?,?,?,?)';
    connection.query(insertQuery,[Employee.NAME,Employee.EMAIL_ID,Employee.MOBILE_NUMBER,Employee.ADDRESS,Employee.DEPARTMENT,Employee.CITY,Employee.GENDER],(error,result)=>{
        if(error){
            return res.status(500).json(error);
        }
        else{
            return res.status(200).json({message: "Employee added Successfully."});
        }
    })
})

router.get('/get',(req,res)=>{
    var selectQuery = 'select * from employee_details order by ID desc';
    connection.query(selectQuery,(error,result)=>{
        if(error){
            return res.status(500).json(error);
        }
        else{
            return res.status(200).json(result);
        }
    })
})

router.put('/update',(req,res)=>{
    let Employee = req.body;
    console.log(Employee,"Data Got");
    
    var updateQuery = 'update employee_details set NAME=?,EMAIL_ID=?,MOBILE_NUMBER=?,ADDRESS=?,DEPARTMENT=?,CITY=?,GENDER=? where ID=?';
    connection.query(updateQuery,[Employee.NAME,Employee.EMAIL_ID,Employee.MOBILE_NUMBER,Employee.ADDRESS,Employee.DEPARTMENT,Employee.CITY,Employee.GENDER,Employee.ID],(error,result)=>{
        if(error){
            return res.status(500).json(error);
        }
        else{
            console.log(result,"update result");
            
            if(result.affectedRows == 0){
                return res.status(404).json({message: "Employee id does not found."});
            }
            return res.status(200).json({message: "Employee updated Successfully."});
        }
    })
})

router.post('/delete',(req,res)=>{
    let Employee = req.body;
    var updateQuery = 'delete from employee_details where ID=?';
    connection.query(updateQuery,[Employee.ID],(error,result)=>{
        if(error){
            return res.status(500).json(error);
        }
        else{
            if(result.affectedRows == 0){
                return res.status(404).json({message: "Employee id does not found."});
            }
            return res.status(200).json({message: "Employee deleted Successfully."});
        }
    })
})

module.exports = router;