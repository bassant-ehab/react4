import React from 'react';


import { Link } from 'react-router-dom';


export default function Navbar() {
  return <>
    <nav className="navbar navbar-expand-lg ">
      <div className="container  text-white">
        <Link className="navbar-brand text-uppercase fw-bolder text-white" to="/">
          start framework
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-4 me-3 ">
            <li className="nav-item">
              <Link className="nav-link text-uppercase text-white fw-bold" to="About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase text-white fw-bold" to="Portfolio">portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase  text-white fw-bold" to="Contact">contact</Link>
            </li>
             
          </ul>
          
        </div>
      </div>
    </nav>
  </>
}
