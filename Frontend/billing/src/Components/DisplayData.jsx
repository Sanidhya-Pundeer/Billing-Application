import React,{useEffect} from 'react'
import "./LoginSignup.css";

export default function DisplayData(props) {

    useEffect(() => {
        document.title = props.pageTitle;
      }, [props.pageTitle]);

  return (
    <>
        <div className="container">
      <h5>ADMIN PORTAL</h5>
    </div>
    </>
  )
}
