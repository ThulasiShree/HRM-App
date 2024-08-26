import React from 'react'
import Aside from '../../Components/Aside/Aside'
import Header from '../../Components/Header/Header'
import './Employee.css'
import { Link, Outlet } from 'react-router-dom'

const Employee = () => {
  return (
    <div>
      <Aside />
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-10">
          <Header />
          <div className="d-flex flex-column gap-3 mt-5 mx-4">
            <span className='fs-5 fw-medium'>Employee</span>
            <div className="d-flex flex-row align-items-center gap-4">
              <Link to='/employee/empdetail' style={{textDecoration: 'none'}}>
                <button className='emp-btn d-flex flex-column align-items-center justify-content-center p-4 gap-2'>
                  <i className="bi bi-person-plus fs-3"></i>
                  Employee
                </button>
              </Link>
              <Link to='' style={{textDecoration: 'none'}}>
                <button className='emp-btn d-flex flex-column align-items-center justify-content-center p-4 gap-2'>
                  <i className="bi bi-buildings fs-3"></i>
                  Org Config
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employee