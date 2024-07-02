import React from 'react'
import logo from './logo-999.png'

function Header() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a href=''>
            <img src={logo} alt='' width='42px' className='pe-1' />
          </a>
          <a className='navbar-brand fw-bold' href='#'>
            REYAN STORE
          </a>
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
                <a className='nav-link' aria-current='page' href='#'>
                  Cart
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header