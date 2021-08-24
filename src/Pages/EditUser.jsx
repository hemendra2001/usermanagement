import React from 'react'
import Navbar from '../Components/Navbar'
import { FormControl,Input, FormGroup, Button,makeStyles} from '@material-ui/core'
import {useState,useEffect} from 'react';
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

const EditUser = ({match}) => {

    const [post, setPost] = useState({
        username:"",email:"",phone:"",subject:"",college:"",
    });
    const history = useHistory();

    const handleChange = (e) =>{
        setPost({...post,[e.target.name]:e.target.value});
    }

    const updateData = async(e) =>{
        e.preventDefault();
        const {username,email,phone,subject,college} = post;
        try{
           const res =  await fetch(`/updateUser/${match.params.id}`,{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({
                    username,email,phone,subject,college  
                })
            })
            await res.json();
            history.push("/");
        }
        catch(err){
            console.log(err);
        }
    }

 useEffect(()=>{
     fetch(`/getUserById/${match.params.id}`,{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }
    })
    .then(function(response){
        return response.json();
    }).then(function(myJson){
        setPost(myJson);
    })

 },[]);


    const classes = useStyle();
    return (
        <>
          <Navbar/>
          <FormGroup className={classes.container}>
              <FormControl>
                 <label className="text-primary">Username</label>
                  <Input value={post.username} name="username" onChange={handleChange} />
              </FormControl>
              <FormControl>
              <label className="text-primary">Email</label>
                  <Input value={post.email} name="email" onChange={handleChange} />
              </FormControl>
              <FormControl>
              <label className="text-primary">Phone</label>
                  <Input value={post.phone} name="phone" onChange={handleChange} />
              </FormControl>
              <FormControl>
              <label className="text-primary">Subject</label>
                  <Input value={post.subject} name="subject" onChange={handleChange} />
              </FormControl>
              <FormControl>
              <label className="text-primary">College</label>
                  <Input value={post.college} name="college" onChange={handleChange} />
              </FormControl>
              <Button variant="contained" onClick = {updateData} color="primary">Update User</Button>
          </FormGroup>
        </>
    )
}

export default EditUser
