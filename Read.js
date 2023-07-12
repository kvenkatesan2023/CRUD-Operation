import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table,Button } from 'semantic-ui-react'
import { API_URL } from '../constants/post';
import { useNavigate } from 'react-router-dom';


function Read() {
    const[apiData,setApiData] = useState([]);
    const navigate = useNavigate();

    const UpdateData =({title,body,checked,id})=>{
        localStorage.setItem('title',title)
        localStorage.setItem('body',body)
        localStorage.setItem('checked',checked)
        localStorage.setItem('id',id)
    
        navigate('/Update');
    }
       
    const deleteUser = async()=>{
         await axios.get(API_URL);
        calGetAPI();
    }



    const calGetAPI = async ()=>{
        const resp = await axios.get(API_URL);
        setApiData(resp.data);
    }
   
    useEffect(()=>{
         calGetAPI();

    }, []);


  return (
    <React.StrictMode>
    <div>
     <Table singleLine >
        <Table.Header  className='menu' >
            <Table.Row className='table' >
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Checked</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
   
        <Table.Body>
            {
                apiData.map(data=>(
                <Table.Row key={data.id}>
                <Table.Cell>{data.title}</Table.Cell>
                <Table.Cell>{data.body}</Table.Cell>
                <Table.Cell>{data.checked ? 'checked' : 'Not  checked'}</Table.Cell>
                <Table.Cell><Button onClick={()=>deleteUser(data.id)}>Delete</Button></Table.Cell>
                <Table.Cell><Button onClick={() =>UpdateData(data)}>Update</Button></Table.Cell>
                </Table.Row>


                ))
            }
          

        </Table.Body>


     </Table>
    
     </div>
     </React.StrictMode>
  )
}

export default Read