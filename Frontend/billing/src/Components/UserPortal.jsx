import React,{useEffect} from 'react'
import "./LoginSignup.css";

export default function UserPortal(props) {
    useEffect(() => {
        document.title = props.pageTitle;
      }, [props.pageTitle]);

  return (
    <>
    <div className="container">
      <h5>User Portal</h5>
    </div>
    </>
  )
}
