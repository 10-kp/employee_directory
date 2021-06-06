import React, { Component } from 'react';
import API from '../utils/API';

// Setting the component's initial state
class Employee extends Component {
  state = {
    results: [],
    search: '',
    sortOrder: ''
  }

  // To pull in API data
componentDidMount() {
    API.getRandomUsers().then((res) => {
      this.setState({ results: res.data.results });
    });
}
        // Filter data by the employee's name
handleInputChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    this.setState({ search: searchValue });
}
}

// Sort By First Name
sortByFirstName = () => {
    const sortedEmployees = this.state.results.sort((a, b) => {
      if (b.name.first > a.name.first) {
        return -1
      }
      if (a.name.first > b.name.first) {
        return 1
      }
      return 0;
    });

    if (this.state.sortOrder === "DESC") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }
    this.setState({ results: sortedEmployees })
  }

    //Sort by last name 
    sortByLastName = () => {
        const sortedEmployees = this.state.results.sort((a, b) => {
          if (b.name.last > a.name.last) {
            return -1
          }
          if (a.name.last > b.name.last) {
            return 1
          }
          return 0;
        });
        if (this.state.sortOrder === "DESC") {
          sortedEmployees.reverse();
          this.setState({ sortOrder: "ASC" });
        } else {
          this.setState({ sortOrder: "DESC" });
        }
        this.setState({ results: sortedEmployees })
      }

// Add filterEmployee function
handleFormSubmit = (event) => {
    event.preventDefault();
};

 //Render items 
 
 render() {
    return (
      <div>
        <Search handleInputChange={this.handleInputChange}
          search={this.state.search} />

        <div className="table-responsive">
        <table className="table table-striped table-resposive text-center table-hover">
            <thead>
              <tr>
                <th>Image</th>
                <th>First Name <span className="downArrow" onClick={this.sortByFName}></span></th>
                <th>Last Name <span className="downArrow" onClick={this.sortByLName}></span></th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB </th>
              </tr>
            </thead>

            { //First Name sort
              this.state.results && this.state.results.map(item =>
                item.name.first.toLowerCase().includes(this.state.search) ?
                  <tbody key={item.login.uuid}>
                    <tr>
                      <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                      <td >{item.name.first}</td>
                      <td >{item.name.last}</td>
                      <td >{item.phone}</td>
                      <td >{item.email}</td>
                      <td>{DateFormat(item.dob.date, "mediumDate")}</td>  
                    </tr>
                  </tbody>

                  :
                  //Last Name sort
                  item.name.last.toLowerCase().includes(this.state.search) ?
                    <tbody key={item.login.uuid}>
                      <tr>
                      <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                        <td >{item.name.first}</td>
                        <td >{item.name.last}</td>
                        <td >{item.phone} </td>
                        <td >{item.email}</td>
                        <td>{DateFormat(item.dob.date, "mediumDate")}</td>  
                      </tr>
                    </tbody>
                    :
                    null
              )}
          </table>
        </div>
      </div>
    )
  }

export default Employee;
