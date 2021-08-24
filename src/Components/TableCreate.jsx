import React from 'react';
import  { Table,TableHead, TableRow,TableCell, TableBody, TableContainer,makeStyles,Button} from '@material-ui/core';
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';

const TableCreate = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
       gettingUser();

    },[])

    const gettingUser = () => {
        fetch("/getUser",{
            method:"GET",
            headers:{
                "Content-type":"application/json"
            },
        }).then(function(response){
            return response.json();
        }).then(function(myJson){

            setData(myJson);
        })
    }

    const deleteUser = (id) =>{
        fetch(`/deleteUser/${id}`,{
            method:"DELETE"
        });
        gettingUser();

    }


    const useStyles = makeStyles({
        tablecell:{
      fontWeight:"bold",
        },
      });
      const classes = useStyles();
  
    return (
        <>
        <Link to="/addUser">
        <button className="btn btn-success mx-5 mb-2">Add New User</button></Link>
         <TableContainer className="container">
           <Table > 
           <TableHead >
               <TableRow  >
                   <TableCell className={classes.tablecell}>Name </TableCell>
                   <TableCell className={classes.tablecell}>Email </TableCell>
                   <TableCell className={classes.tablecell}>Mobile </TableCell>
                   <TableCell className={classes.tablecell}>Subject </TableCell>
                   <TableCell className={classes.tablecell}>College </TableCell>
                   
                   </TableRow>
               </TableHead>
               <TableBody>
               {   
                data.map(data =>(
                   <TableRow key={data._id}>
                
                        <TableCell>{data.username}</TableCell>
                        <TableCell>{data.email}</TableCell>
                        <TableCell>{data.phone}</TableCell>
                        <TableCell>{data.subject}</TableCell>
                        <TableCell>{data.college}</TableCell>
                    <Link to={`editUser/${data._id}`}><Button variant="contained"  className="m-2" color="primary">Edit</Button></Link>
                      <Button variant="contained" color="secondary" onClick = {()=>deleteUser(data._id)}>Delete</Button>
                  
                        </TableRow>
                       ))
                     
                   }
                      
                      
                   </TableBody>
                   </Table>
                   </TableContainer>
            
        </>
    )
}

export default TableCreate
