import React, { useEffect, useState } from 'react';
import "./LoginSignup.css";
import Button from 'react-bootstrap/Button';
import axios from 'axios'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function AddData(props) {
    useEffect(() => {
        document.title = props.pageTitle;
      }, [props.pageTitle]);

  const navigate = useNavigate();
  const [billTitle, setBillTitle] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [userEmail, setEmailValue] = useState('');

  const handleAdd = () => {
    const newData = {
        billTitle,
      billAmount,
      userEmail
    };
    console.log(newData);
    
    axios.post('http://localhost:5000/api/billCreation', newData)
      .then(response => {
        console.log(response.data); 
        toast.success("Data Added Successfully");
        navigate('/Admin-Portal');
      })
      .catch(error => {
        toast.error("Error adding data");
        console.error('Error adding data:', error);
      });
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
                value={billTitle}
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
                value={userEmail}
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
