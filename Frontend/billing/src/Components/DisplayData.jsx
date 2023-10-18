import React, { useEffect } from 'react';
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DisplayData(props) {

  const navigate = useNavigate();

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
      name: 'User Mail',
      selector: row => row.userMail
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
      userMail: 'sanyam@gmail.com',
      billAmount: 1000,
      generatedDate: '2021-09-01',
      dueDate: '2021-09-10',
      status: 'Paid'
    }
  ];

  const handleUpdate = (row) => {
    const isConfirmed = window.confirm('Are you sure you want to update this item?');
    if (isConfirmed) {
      console.log('Update confirmed for row:', row);// Navigate to the "updateForm" page using React Router
      navigate('/Admin/UpdateData', {state:{ 
        billId: row.billId,
        billTitle: row.billTitle,
        billAmount: row.billAmount,
        generatedDate: row.generatedDate,
        dueDate: row.dueDate,
        status: row.status,
        userMail: row.userMail,
      },});
    } else {
      console.log('Update canceled for row:', row);
    }
  };

  const handleAdd = () => {
    navigate('/Admin/AddData');
  }

  const handleDelete = (row) => {
    const isConfirmed = window.confirm('Are you sure you want to Delete this item?');
    if (isConfirmed) {
      console.log('Delete confirmed for row:', row);// Navigate to the "updateForm" page using React Router
      navigate('/UpdateData');
    } else {
      console.log('Delete canceled for row:', row);
    }
  };

  return (
    <>
      <div className="mainHeading">Billing Application - Admin Portal</div>
      <Button variant="success" onClick={() => handleAdd()}>Add Data</Button>
      <div className="container">
        <DataTable columns={columns} data={data} fixedHeader></DataTable>
      </div>
    </>
  );
}
