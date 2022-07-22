import React from 'react';
import style from "../css_modules/email.module.css";

const Footer = () => {
  return (
    <footer className="row align-items-center m-0 w-100">
        <div className="btn btn-danger col-2 offset-2">
          <p className="m-0">Send me an <span className={`${style.email} text-uppercase`}>email</span></p>
        </div>
      </footer>
  )
}

export default Footer