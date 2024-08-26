import React from 'react'
import Aside from '../../../Components/Aside/Aside'
import Header from '../../../Components/Header/Header'

const AttendanceList = () => {
  return (
    <div>
      <Aside />
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-10">
          <Header />
            <div className="ms-4 my-4">
            <h2>Attendance List</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AttendanceList