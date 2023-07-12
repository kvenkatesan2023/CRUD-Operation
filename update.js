import React, { useEffect,useState} from 'react'
import {Form,Button,Checkbox} from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../constants/post';

function Update() {
  const[title,setTitle] =useState('');
  const[body,setBody] = useState('');
  const[id,setId] = useState('');
  const[checked,setChecked] = useState(false);
  const navigate = useNavigate();

  const Updated =async() =>{
      await axios.put(API_URL,{
          title,
          body,
          checked
      })
    navigate('/read')

  }
  

  useEffect(()=>{
      setId(localStorage.getItem('id'));
      setTitle(localStorage.getItem('title'));
       setBody(localStorage.getItem('body'));
       setChecked(localStorage.getItem('checked'));
      
    
       
  },[])
  
  return (
    <Form className = "form">
    <Form.Field>
        <label>First Name : </label>
        <input placeholder='Enter First Name'
         value={title}
         onChange={event=>setTitle(event.target.value)}/>

    </Form.Field> <br/>
    <Form.Field>
        <label>Last Name  : </label>
        <input placeholder='Enter Last Name'
          onChange={event=>setBody(event.target.value)}
          value={body}/>
        
    </Form.Field><br/>
    <Form.Field><br/>
     <Checkbox 
     checked={checked}
     onChange={()=>setChecked(!checked)}
     label="Agree the terms & conditions"/>
      
    </Form.Field><br/>
    <Button onClick={Updated} >Update</Button>
  </Form>


  )
}

export default Update