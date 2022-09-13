import React from 'react'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <div className={`form-check form-switch mx-2 text-${props.text}`}>
  <input className="form-check-input"  type="checkbox" onClick={props.togglemode}id="flexSwitchCheckChecked"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked" >{props.value}</label>
</div>
  </div>
</nav>
<div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Sucess:</strong> {props.alertValue}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
</>
      )
}
