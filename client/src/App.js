import './App.css';
import React from 'react';
import  InputUsers from "./components/InputUsers";
import  ListUsers from "./components/ListUsers";
import ListDepartments from "./components/ListDepartments";

function App() {
  return (
    
      <div  className="container">

        <InputUsers/>
        <ListUsers/>
        {/* <EditUsers/> */}
        <ListDepartments/>
      </div>
   
  );
}

export default App;
