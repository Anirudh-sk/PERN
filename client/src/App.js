import './App.css';
import React,{ Fragment } from 'react';
import  InputUsers from "./components/InputUsers";
import  ListUsers from "./components/ListUsers";

function App() {
  return (
    <Fragment>
      <div className="container">

        <InputUsers/>
        <ListUsers/>
        {/* <EditUsers/> */}
      </div>
    </Fragment>
  );
}

export default App;
