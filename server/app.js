const express = require('express');
const cors = require('cors');
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const mongoose=require('mongoose');

const employee =require('./routes/api/employee');
const user =require('./routes/api/user');

mongoose.connect('mongodb+srv://blogadmin:4UdomgAGXX00rbFR@cluster0.lehd23n.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser:true
});

app.use('/api/employee',employee);
app.use('/api/user',user);

const port =8052;
app.listen(port, ()=> console.log(`Server running on port ${port}`));