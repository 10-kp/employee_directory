import React, { Component } from 'react';
import Employees from './Employees';
import Search from './Search';
import API from '../utils/API';

class Directory extends Component {
  // Setting the component's initial state
  state = {
    employees: [],
    search: '',
    empSort: [],
    sorted: false,
  };

  // To pull in data
  componentDidMount() {
    API.getRandomUsers()
      .then((res) => this.setState({ employees: res.data.data }))
      .catch((err) => console.log(err));
  }

  // Sort through employees based on search term
  // Check for match and set for rendering
  sortEmp = () => {
    let { employees, search } = this.state;
    let empSort = employees.filter((sorted) => {
      return (
        sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
        sorted.name.last.toLowerCase().includes(search.toLowerCase()) ||
        sorted.email.toLowerCase().includes(search.toLowerCase())
      );
    });
    this.setState({ empSort });
  };

  // Grab search term and activate sorted
  startSort = (event) => {
    this.setState({ search: event.target.value }, () => {
      this.sortEmp();
      this.setState({ sorted: true });
    });
  };

  // To make the page
  render = () => {
    return (
      <div className='background'>
        <div className='jumbotron jumbotron-fluid'>
          <h2 className='display-3'>Employee Directory</h2>
          <p> Search for an employee by entering their name or email below.</p>

          <Search name='search' startSort={this.startSort} label='Search' />
        </div>

        <div className='container-fluid'>
          <table className='table table-light table-striped table-hover table-bordered table-condensed'>
            <thead className='thead'>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {
                // If user has not entered any search input, sort employees by UUID
                !this.state.sorted
                  ? this.state.employees.map((employee) => (
                      <Employees
                        key={employee.id.value}
                        firstName={employee.name.first}
                        lastName={employee.name.last}
                        phone={employee.phone}
                        email={employee.email}
                        icon={employee.picture.medium}
                        address={
                          employee.location.street.number +
                          ' ' +
                          employee.location.street.name +
                          ', ' +
                          employee.location.city +
                          ', ' +
                          employee.location.state +
                          ' ' +
                          employee.location.postcode
                        }
                      />
                    ))
                  : // sort users by UUID if the user has entered a search
                    this.state.empSort.map((employee) => (
                      <Employees
                        key={employee.id.value}
                        firstName={employee.name.first}
                        lastName={employee.name.last}
                        phone={employee.phone}
                        email={employee.email}
                        icon={employee.picture.medium}
                        dob={employee.dob.date}
                        address={
                          employee.location.street.number +
                          employee.location.street.name
                        }
                      />
                    ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  };
}

export default Directory;
