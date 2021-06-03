import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';

import './App.css';

const filteredEmployees = data.filter((employee) =>
  employee.name.toLowerCase().startsWith(searchTerm.toLowerCase())
);

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>

      <EmployeeList data={filteredEmployees} />
    </div>
  );
}

export default App;
