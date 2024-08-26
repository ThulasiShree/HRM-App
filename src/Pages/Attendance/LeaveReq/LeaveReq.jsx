import React from 'react'
import Aside from '../../../Components/Aside/Aside'
import Header from '../../../Components/Header/Header'

const LeaveReq = () => {
  return (
    <div>
      <Aside />
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-10">
          <Header />
          <div className="ms-4 my-4">
            <h2>Leave Request</h2>
            <div className="d-sm-flex flex-row align-items-center gap-4 mt-3">
              <div className="d-flex flex-column py-3 ps-4 rounded" style={{ background: '#FFEFE7', width: '180px' }}>
                <div className="d-flex flex-column">
                  <span className='fs-6 fw-medium text-nowrap'>Casual Leave </span>
                  <span className='fs-3 fw-medium'>04</span>
                </div>
                <span className='d-block text-end pe-4' style={{ fontSize: '10px' }}>+2% Jan month</span>
              </div>
              <div className="d-flex flex-column py-3 ps-4 rounded" style={{ background: '#FFEFE7', width: '180px' }}>
                <div className="d-flex flex-column">
                  <span className='fs-6 fw-medium text-nowrap'>Emergency Leave</span>
                  <span className='fs-3 fw-medium'>06</span>
                </div>
                <span className='d-block text-end pe-4' style={{ fontSize: '10px' }}>+2% Jan month</span>
              </div>
              <div className="d-flex flex-column py-3 ps-4 rounded" style={{ background: '#E8F0FB', width: '180px' }}>
                <div className="d-flex flex-column">
                  <span className='fs-6 fw-medium text-nowrap'>Total Leave Jan</span>
                  <span className='fs-3 fw-medium'>10</span>
                </div>
                <span className='d-block text-end pe-4' style={{ fontSize: '10px' }}>+2% Jan month</span>
              </div>
              <div className="d-flex flex-column py-3 ps-4 rounded" style={{ background: '#FFEFE7', width: '180px' }}>
                <div className="d-flex flex-column">
                  <span className='fs-6 fw-medium text-nowrap'>Today Leave</span>
                  <span className='fs-3 fw-medium'>02</span>
                </div>
                <span className='d-block text-end pe-4' style={{ fontSize: '10px' }}>23/01  Monday</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaveReq