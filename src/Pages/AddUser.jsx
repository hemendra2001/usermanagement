import React from 'react'
import Navbar from '../Components/Navbar'
import { FormControl,InputLabel, Input, FormGroup, Button,makeStyles} from '@material-ui/core'
import {useState} from 'react';
import { useHistory } from 'react-router';



const useStyle = makeStyles({
container:{
    width:'50%',
    margin:'5% 0 0 25%',
    '& > *':{
        marginTop:20,
    }
}
});

const AddUser = () => {

const[data,setData] = useState({
    username:"",email:"",phone:"",subject:"",college:"",
})
const[error,setError] = useState(null);
const history = useHistory();

const handleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value});
}

const submitData = async(e) =>{
    e.preventDefault();
    const {username,email,phone,subject,college} = data;
    try{
       const res =  await fetch("postUser",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                username,email,phone,subject,college  
            })
        })
        const userData = await res.json();
        if(res.status === 200){
            history.push("/")
        }
        else{
            setError(userData.Error)
        }
    }
    catch(err){
        console.log(err.error);
    }
}




    const classes = useStyle();
    return (
        <>
          <Navbar/>
          <div className="container">
              <p className="text-center text-danger lead">{error}</p>
          </div>
          <FormGroup className={classes.container}>
              <FormControl>
                  <InputLabel>Name</InputLabel>
                  <Input name="username" value={data.username} onChange={handleChange} autoComplete="off"/>
              </FormControl>
              <FormControl>
                  <InputLabel>Email</InputLabel>
                  <Input name="email" value={data.email} onChange={handleChange} autoComplete="off"/>
              </FormControl>
              <FormControl>
                  <InputLabel>Phone</InputLabel>
                  <Input name="phone" value={data.phone} onChange={handleChange} autoComplete="off"/>
              </FormControl>
              <FormControl>
                  <InputLabel>Subject</InputLabel>
                  <Input name="subject" value={data.subject} onChange={handleChange} autoComplete="off"/>
              </FormControl>
              <FormControl>
                  <InputLabel>College</InputLabel>
                  <Input name="college" value={data.college} onChange={handleChange} autoComplete="off"/>
              </FormControl>
              <Button variant="contained" onClick = {submitData} color="primary">Add User</Button>
          </FormGroup>
        </>
    )
}

export default AddUser
