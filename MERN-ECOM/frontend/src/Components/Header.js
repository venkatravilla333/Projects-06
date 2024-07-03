import React from 'react'
import logo from './logo-999.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a href=''>
            <img src={logo} alt='' width='42px' className='pe-1' />
          </a>
          <Link to='/' className='navbar-brand fw-bold' href='#'>
            REYAN STORE
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link fw-medium' aria-current='page' href='#'>
                  Cart
                </a>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fw-medium' to='/signup'>
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header