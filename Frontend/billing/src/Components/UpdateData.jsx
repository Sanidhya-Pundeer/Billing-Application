import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import "./LoginSignup.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UpdateData(props) {
  useEffect(() => {
    document.title = props.pageTitle;
  }, [props.pageTitle]);

  const location = useLocation();

  const [BillId, setBillId] = useState(location.state.billId);
  const [BillTitle, setBillTitle] = useState(location.state.billTitle);
  const [billAmount, setBillAmount] = useState(location.state.billAmount);
  const [dueDate, setDueDate] = useState(location.state.dueDate);
  const [status, setStatus] = useState(location.state.status);
  const [userMail, setEmailValue] = useState(location.state.userMail);

  const handleUpdate = () => {

    const updatedData = {
      BillId,
      BillTitle,
      billAmount,
      dueDate,
      status,
      userMail
    };
    console.log(updatedData);   
  };

  return (
    <>
      <div className="mainHeading">Admin - Update for Bill Id : {BillId}</div>
      <div className="container">
        <div className="form-container">
          <div className="header"></div>
          <div className="inputs">
            <div className="input">
              <input
                type="text"
                placeholder="Bill Title"
                value={BillTitle}
                onChange={(e) => setBillTitle(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Bill Amount"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
              />
            </div>
            
            <div className="input">
              <input
                type="text"
                placeholder="Due Date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="mail"
                placeholder="User Mail"
                value={userMail}
                onChange={(e) => setEmailValue(e.target.value)}
              />
            </div>
            <Button variant="primary" onClick={() => handleUpdate()}>Update</Button>
          </div>
        </div>
      </div>
    </>
  );
}
