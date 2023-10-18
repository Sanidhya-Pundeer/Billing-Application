import React, { useEffect, useState } from 'react';
import "./LoginSignup.css";
import Button from 'react-bootstrap/Button';

export default function AddData(props) {
    useEffect(() => {
        document.title = props.pageTitle;
      }, [props.pageTitle]);

  const [BillTitle, setBillTitle] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [userMail, setEmailValue] = useState('');

  const handleAdd = () => {
    const newData = {
      BillTitle,
      billAmount,
      userMail
    };
    console.log(newData);
    // Add your logic to save the new data
  };
  return (
    <>
      <div className="mainHeading">Admin - Add Data</div>
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
                type="mail"
                placeholder="User Mail"
                value={userMail}
                onChange={(e) => setEmailValue(e.target.value)}
              />
            </div>
            <Button variant="primary" onClick={() => handleAdd()}>Add</Button>
          </div>
        </div>
      </div>
    </>

  )
}
