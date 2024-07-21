import React from "react";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary " >
      <div className="container-fluid" style={{justifyContent:"center", fontWeight:"bold"}}>
        <a className="navbar-brand " href="#" >
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  );
}
