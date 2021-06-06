import React, { Component } from 'react';
import API from '../utils/API';
import Search from './Search';
import '../styles/table.css';

// Setting the component's initial state
class Employee extends Component {
  state = {
    results: [],
    search: '',
    sortOrder: '',
  };

  // To pull in API data
  componentDidMount() {
    API.EmployeeSearch().then((res) => {
      this.setState({ results: res.data.results });
    });
  }

  // Sort By First Name
  sortByFirstName = () => {
    const sortEmployees = this.state.results.sort((a, b) => {
      if (b.name.first > a.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    });

    if (this.state.sortOrder === 'DESC') {
      sortEmployees.reverse();
      this.setState({ sortOrder: 'ASC' });
    } else {
      this.setState({ sortOrder: 'DESC' });
    }
    this.setState({ results: sortEmployees });
  };

  //Sort by last name
  sortByLastName = () => {
    const sortEmployees = this.state.results.sort((a, b) => {
      if (b.name.last > a.name.last) {
        return -1;
      }
      if (a.name.last > b.name.last) {
        return 1;
      }
      return 0;
    });

    if (this.state.sortOrder === 'DESC') {
      sortEmployees.reverse();
      this.setState({ sortOrder: 'ASC' });
    } else {
      this.setState({ sortOrder: 'DESC' });
    }
    this.setState({ results: sortEmployees });
  };

  // Filter data by the employee's name
  handleInputChange = (event) => {
    if (event.target.name === 'search') {
      const searchValue = event.target.value.toLowerCase();
      this.setState({
        search: searchValue,
      });
    }
  };

  //Render page
  render() {
    return (
      <div>
        <Search
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        />

        <div className='table-responsive'>
          <table className='table table-striped table-resposive text-center table-hover'>
            <thead>
              <tr>
                <th>Image</th>
                <th>
                  First Name{' '}
                  <span
                    className='downArrow'
                    onClick={this.sortByFirstName}
                  ></span>
                </th>
                <th>
                  Last Name{' '}
                  <span
                    className='downArrow'
                    onClick={this.sortByLastName}
                  ></span>
                </th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>

            {
              //First Name sort
              this.state.results &&
                this.state.results.map((item) =>
                  item.name.first.toLowerCase().includes(this.state.search) ? (
                    <tbody key={item.login.uuid}>
                      <tr>
                        <td>
                          <img
                            src={item.picture.thumbnail}
                            className='rounded-circle'
                            alt='thumbnail'
                          />
                        </td>
                        <td>{item.name.first}</td>
                        <td>{item.name.last}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                      </tr>
                    </tbody>
                  ) : //Last Name sort
                  item.name.last.toLowerCase().includes(this.state.search) ? (
                    <tbody key={item.login.uuid}>
                      <tr>
                        <td>
                          <img
                            src={item.picture.thumbnail}
                            className='rounded-circle'
                            alt='thumbnail'
                          />
                        </td>
                        <td>{item.name.first}</td>
                        <td>{item.name.last}</td>
                        <td>{item.phone} </td>
                        <td>{item.email}</td>
                      </tr>
                    </tbody>
                  ) : null
                )
            }
          </table>
        </div>
      </div>
    );
  }
}

export default Employee;
