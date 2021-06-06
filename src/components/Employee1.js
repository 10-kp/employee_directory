import React, { Component } from 'react';
import EmployeeData from './EmployeeData';
import API from '../utils/API';

// Setting the component's initial state
class Employee extends Component {
  state = {
    employeeRecords: [],
  };

  // To pull in data
  componentDidMount() {
    API.getRandomUsers().then((records) => {
      let empdata = records.data.results;
      let employeeRecordstemp = [];

      for (let i = 0; i < empdata.length; i++) {
        let employeeRecord = {
          name: empdata[i].name.first + ' ' + empdata[i].name.last,
          email: empdata[i].email,
          image: empdata[i].picture.medium,
          phone: empdata[i].cell,
        };
        employeeRecordstemp.push(employeeRecord);
      }
      console.log(employeeRecordstemp);
      this.setState({ employeeRecords: employeeRecordstemp });
    });
  }

  render() {
    return (
      <div>
        <h3>Employee Details</h3>
        <EmployeeData employees={this.state.employeeRecords} />
      </div>
    );
  }
}

export default Employee;
