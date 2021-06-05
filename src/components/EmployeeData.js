import React from 'react';
import { MDBDataTable } from 'mdbreact';

const EmployeeData = (props) => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Image',
        field: 'image',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Phone',
        field: 'phone',
        sort: 'asc',
        width: 200,
      },
    ],
    rows: props.employees,
  };
  console.log('Props', props);
  return <MDBDataTable sorting={true} striped bordered data={data} />;
};

export default EmployeeData;
