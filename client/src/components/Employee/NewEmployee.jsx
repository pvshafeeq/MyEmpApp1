import React, { useState, useEffect } from 'react'
import { Icon, Label, Menu, Table, Button, Segment, Container, Form, TextArea, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const NewEmployee = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');

    useEffect(() => {
        let usr = sessionStorage.getItem("username");
        if (usr == null) {
          navigate('/');
        }
      }, [])

      const sendDataToAPI = () => {
        const empData = {
          "name": name,
          "designation": designation,
          "location": location,
          "salary": salary
        };
    
        axios.post('http://localhost:8052/api/employee', empData)
          .then(() => {
            navigate('/home');
          })
      }

  return (
   <>
   <Navbar/>
     <div class="col-md-4 mb-10 mt-10">
    <Form>
          <Form.Field>
            <label>Employee Name</label>
            <input required name='name' value={name} placeholder='Employee Name' onChange={(e) => setName(e.target.value)} />
          </Form.Field>

          <Form.Field>
            <label>Designation</label>
            <input required name='designation' value={designation} placeholder='Designation' onChange={(e) => setDesignation(e.target.value)} />
          </Form.Field>

          <Form.Field>
            <label>Location</label>
            <input required name='location' value={location} placeholder='Location' onChange={(e) => setLocation(e.target.value)} />
          </Form.Field>

          <Form.Field>
            <label>Salary</label>
            <input required name='salary' type="number" value={salary} placeholder='Salary' onChange={(e) => setSalary(e.target.value)} />
          </Form.Field>

          <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
          <Button>
            <Link to='/home'>Cancel</Link>
          </Button>
        </Form>
        </div>
   </>
  )
}

export default NewEmployee