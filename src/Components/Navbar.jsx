import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">CRUD OPERATION</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Normal Material Table</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
