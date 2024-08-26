import React from 'react'
import Aside from '../Components/Aside/Aside'
import Header from '../Components/Header/Header'

const Announcement = () => {
  return (
    <div>
      <Aside/>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-10">
          <Header/>
        </div>
      </div>
    </div>
  )
}

export default Announcement