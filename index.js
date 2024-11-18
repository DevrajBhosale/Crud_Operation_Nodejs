const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


const employeeRoutes = require('./Routes/EmpDetails');

app.use('/employee',employeeRoutes);
module.exports = app;