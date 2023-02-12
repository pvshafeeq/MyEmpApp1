import React, { useEffect, useState } from 'react'
import { Icon, Label, Menu, Table, Button, Segment, Container } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';

const ViewEmployee = () => {
    const navigate = useNavigate();
    const [apiData, setApiData] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let usr = sessionStorage.getItem("username");
        if (usr == null) {
          navigate('/');
        }
        else {
          if (usr == 'admin') {
            setVisible(true)
          }
    
          axios.get('http://localhost:8052/api/employee')
            .then((getData) => {
              setApiData(getData.data);
              console.log(getData.data)
            })
        }
      }, [])

      const setData = (id, name, designation, location, salary) => {
        localStorage.setItem('ID', id);
        localStorage.setItem('name', name);
        localStorage.setItem('designation', designation);
        localStorage.setItem('location', location);
        localStorage.setItem('salary', salary);
      }
    
      const getData = () => {
        axios.get('http://localhost:8052/api/employee')
          .then((getData) => {
            setApiData(getData.data);
            console.log(getData.data);
          })
      }
    
      const onDelete = (id) => {
        axios.delete(`http://localhost:8052/api/employee/${id}`)
          .then(() => {
            getData();
          })
      }

  return (
   <>
   <Navbar/>
   <div class="col-md-4 mb-10 mt-10">
    {visible && <Button>
          <Link to='/newemployee'>Add New</Link>
        </Button>}
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Designation</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell>Salary</Table.HeaderCell>
              {visible && <> <Table.HeaderCell></Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell></>}

            </Table.Row>
          </Table.Header>

          <Table.Body>
            {apiData.map((data) => {
              return (
                <Table.Row>
                  <Table.Cell>{data.name}</Table.Cell>
                  <Table.Cell>{data.designation}</Table.Cell>
                  <Table.Cell>{data.location}</Table.Cell>
                  <Table.Cell>{data.salary}</Table.Cell>

                  {visible && <><Table.Cell>
                    <Link to='/editemployee'>
                      <Button onClick={() => setData(data._id, data.name, data.designation, data.location, data.salary)}>Edit</Button>
                    </Link>
                  </Table.Cell>
                    <Table.Cell>
                      <Button onClick={() => onDelete(data._id)}>Delete</Button>
                    </Table.Cell></>}


                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
        </div>
   </>
  )
}

export default ViewEmployee