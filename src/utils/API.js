import axios from 'axios';
const url = 'https://randomuser.me/api/?results=50';

//Api call
export default {
  EmployeeSearch: function () {
    return axios.get(url);
  },
};
