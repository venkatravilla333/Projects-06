import React from 'react'
import logo from './logo-999.png'

function Header() {
  return (
    <div>
      <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div class='container-fluid'>
          <a href=''>
            <img src={logo} alt='' width='42px' className='pe-1' />
          </a>
          <a class='navbar-brand' href='#'>
            REYAN STORE
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li class='nav-item'>
                <a class='nav-link' aria-current='page' href='#'>
                  Cart
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
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