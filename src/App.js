import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Pages/Home';
import AddUser from './Pages/AddUser';
import EditUser from './Pages/EditUser';



const App = () => {
  return (
    <>
    <BrowserRouter>

    <Switch>
    <Route exact path="/" component={Home} />
    </Switch>

    <Switch>
    <Route exact path="/adduser" component={AddUser} />     
    </Switch>
     
    <Switch>
    <Route exact path="/editUser/:id" component={EditUser} />     
    </Switch>

 


    </BrowserRouter>
    
    </>
    
  )
}

export default App
