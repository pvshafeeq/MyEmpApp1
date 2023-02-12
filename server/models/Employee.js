const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    position: String,
    location: String,
    salary: String
});

module.exports = Employee = mongoose.model('employee', EmployeeSchema);