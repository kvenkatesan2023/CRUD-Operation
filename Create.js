import React ,{useState}from 'react'
import {Form,Button,Checkbox} from 'semantic-ui-react';
import { API_URL } from "../constants/post";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Create() {
  const[title,setTitle] =useState('');
  const[body,setBody] = useState('');
  const[checked,setChecked] = useState(false);
  
  const navigate = useNavigate();
  const postData = async ()=>{
      await axios.post(API_URL,{
          title,
          body,
          checked
      })
      navigate('/Read')
  }
  

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
       <Button onClick={postData}>Submit</Button>
     </Form>
  )
}

export default Create