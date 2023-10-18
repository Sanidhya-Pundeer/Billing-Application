import React, { useEffect, useState } from 'react';
import "./LoginSignup.css";

export default function UpdateData(props) {
  useEffect(() => {
    console.log(props);
    document.title = props.pageTitle;
  }, [props.pageTitle]);

  const [BillId, setBillId] = useState(props.billId || ''); // Set initial value from props
  const [BillTitle, setBillTitle] = useState(props.billTitle || '');
  const [billAmount, setBillAmount] = useState(props.billAmount || '');
  const [generatedDate, setGeneratedDate] = useState(props.generatedDate || '');
  const [dueDate, setDueDate] = useState(props.dueDate || '');
  const [status, setStatus] = useState(props.status || '');
  const [userMail, setEmailValue] = useState(props.userMail || '');

  return (
    <>
      <div className="mainHeading">Admin - Update</div>
      <div className="container">
        <div className="form-container">
          <div className="header"></div>
          <div className="inputs">
            <div className="input">
              <input
                type="text"
                placeholder="Bill Id"
                value={BillId}
                onChange={(e) => setBillId(e.target.value)}
                readOnly // Make it read-only
              />
            </div>
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
                placeholder="Generated Date"
                value={generatedDate}
                onChange={(e) => setGeneratedDate(e.target.value)}
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
          </div>
        </div>
      </div>
    </>
  );
}
