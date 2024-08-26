import React from 'react'
import { Link } from 'react-router-dom'
import Aside from '../../Components/Aside/Aside'
import Header from '../../Components/Header/Header'

const Attendance = () => {
  return (
    <div>
      <Aside/>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-10">
          <Header/>
          <div className="d-flex flex-column gap-3 mt-5 mx-4">
            <span className='fs-5 fw-medium'>Attendance</span>
            <div className="d-flex flex-row align-items-center gap-4">
              <Link to='/attendance/leaverequest' style={{textDecoration: 'none'}}>
                <button className='emp-btn d-flex flex-column align-items-center justify-content-center p-4 gap-2'>
                  <i className="bi bi-person-plus fs-3"></i>
                  Leave Request
                </button>
              </Link>
              <Link to='/attendance/attendancelist' style={{textDecoration: 'none'}}>
                <button className='emp-btn d-flex flex-column align-items-center justify-content-center p-4 gap-2'>
                  <i class="bi bi-person-arms-up fs-3"></i>
                  <span className=''>Attendances</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Attendance