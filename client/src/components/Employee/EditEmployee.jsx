import React,  { useState, useEffect } from 'react'
import { Icon, Label, Menu, Table, Button, Segment, Container, Form, TextArea, Dropdown } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';


const EditEmployee = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [ID, setID] = useState(null);


    const sendDataToAPI = () => {
        if(name=='' && designation=='' & location==''&& salary=='')
        {
          alert('Name, Designation, Location & Salary are required!');
        }
        else
        {
        const empData = {
          "_id": ID,
          "name": name,
          "designation": designation,
          "location": location,
          "salary": salary
        };
    
        axios.put(`http://localhost:8052/api/employee`, empData)
          .then(() => {
            navigate('/home');
          })
        }
      }

      useEffect(() => {
        let usr=sessionStorage.getItem("username");
        if(usr==null)
        {
          navigate('/');
        }
        else
        {
        setName(localStorage.getItem('name'));
        setDesignation(localStorage.getItem('designation'));
        setLocation(localStorage.getItem('location'));
        setSalary(localStorage.getItem('salary'));
        setID(localStorage.getItem('ID'));
        }
      }, [])
  return (
    <>
    <Navbar/>
    <div class="col-md-4 mb-10 mt-10">
    <Form>
          <Form.Field>
            <label>Employee Name</label>
            <input name='name' value={name} placeholder='Employee Name' onChange={(e) => setName(e.target.value)} />
          </Form.Field>

          <Form.Field>
            <label>Designation</label>
            <input name='designation' value={designation} placeholder='Designation' onChange={(e) => setDesignation(e.target.value)} />
          </Form.Field>

          <Form.Field>
            <label>Location</label>
            <input name='location' value={location} placeholder='Location' onChange={(e) => setLocation(e.target.value)} />
          </Form.Field>

          <Form.Field>
            <label>Salary</label>
            <input name='salary' type="number" value={salary} placeholder='Salary' onChange={(e) => setSalary(e.target.value)} />
          </Form.Field>

          <Button type='submit' onClick={sendDataToAPI}>Update</Button>
           <Button>
            <Link to='/home' style={{ color: '#FFF' }}>Cancel</Link>
          </Button>
        </Form>
    </div>
    </>
  )
}

export default EditEmployee