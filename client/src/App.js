import './App.css';
import React,{ Fragment } from 'react';
import  InputUsers from "./components/InputUsers";
import  ListUsers from "./components/ListUsers";
import ListDepartments from "./components/ListDepartments";

function App() {
  return (
    <Fragment>
      <div className="container">

        <InputUsers/>
        <ListUsers/>
        {/* <EditUsers/> */}
        <ListDepartments/>
      </div>
    </Fragment>
  );
}

export default App;
