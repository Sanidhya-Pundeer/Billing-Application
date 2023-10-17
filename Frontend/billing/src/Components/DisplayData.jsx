import React, { useEffect } from 'react';
import "./LoginSignup.css";
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DisplayData(props) {

  useEffect(() => {
    document.title = props.pageTitle;
  }, [props.pageTitle]);

  const columns = [
    {
      name: 'Bill Id',
      selector: row => row.billId
    },
    {
      name: 'Bill Title',
      selector: row => row.billTitle
    },
    {
      name: 'User Id',
      selector: row => row.userId
    },
    {
      name: 'Bill Amount',
      selector: row => row.billAmount
    },
    {
      name: 'Generated Date',
      selector: row => row.generatedDate
    },
    {
      name: 'Due Date',
      selector: row => row.dueDate
    },
    {
      name: 'Status',
      selector: row => row.status
    },
    {
      name:'Update',
      selector: row => <Button variant="primary" onClick={() => handleUpdate(row)}>Update</Button>
    },
    {
      name:'Delete',
      selector: row => <Button variant="danger" onClick={() => handleDelete(row)}>Delete</Button>
    }
  ];

  const data = [
    {
      billId: 1,
      billTitle: 'Electricity',
      userId: 1,
      billAmount: 1000,
      generatedDate: '2021-09-01',
      dueDate: '2021-09-10',
      status: 'Paid'
    }
  ];

  const handleUpdate = (row) => {
    console.log('Update clicked for row:', row);
  };

  const handleDelete = (row) => {
    console.log('Delete clicked for row:', row);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <>
      <div className="topRightSection">
        <span>{props.userEmail}</span>
        <Button variant="danger" onClick={() => handleLogout()}>Logout</Button>
      </div>
      <div className="mainHeading">Billing Application - Admin Portal</div>
      <div className="container">
        <DataTable columns={columns} data={data} fixedHeader></DataTable>
      </div>
    </>
  );
}
