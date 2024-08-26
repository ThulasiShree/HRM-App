import React, { useState } from 'react'
import Aside from '../Components/Aside/Aside'
import Header from '../Components/Header/Header'

import Dash1 from '../Assets/dash-img1.png'
import Dash2 from '../Assets/dash-img2.png'
import People1 from '../Assets/people1.png'
import People2 from '../Assets/people2.png'

import Calendar, { MonthView } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const Dashboard = () => {

  const [date, setDate] = useState(new Date())

  const onChange = (newDate) => {
    setDate(newDate)
  }

  const formatShortWeekday = (locale, date) => {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return days[date.getDay()];
  };

  const getPrevMonth = (currentDate) => {
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
    return prevMonth.toLocaleString('default', { month: 'long' });
  };

  const getNextMonth = (currentDate) => {
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
    return nextMonth.toLocaleString('default', { month: 'long' });
  };

  return (
    <div className='container-fluid border'>
      <Aside />
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-10">
          <Header />
          <div className="row py-3 d-flex flex-row align-items-center justify-content-evenly">
            <div className="col-md-7">
              <div className="dashboard-section">
                <span className='fs-5 fw-medium'>Dashboard</span>
                <div className="d-sm-flex flex-row align-items-center gap-4 mt-3">
                  <div className="d-flex flex-column py-3 px-5 rounded" style={{ background: '#FFEFE7' }}>
                    <span className='fs-6 fw-medium text-nowrap'>Leave Request </span>
                    <span className='fs-3 fw-medium'>04</span>
                  </div>
                  <div className="d-flex flex-column py-3 px-5 rounded" style={{ background: '#E8F0FB' }}>
                    <span className='fs-6 fw-medium text-nowrap'>Attendance</span>
                    <span className='fs-3 fw-medium'>10</span>
                  </div>
                  <div className="d-flex flex-column py-3 px-5 rounded" style={{ background: '#FDEBF9' }}>
                    <span className='fs-6 fw-medium text-nowrap'>Total Employees</span>
                    <span className='fs-3 fw-medium'>24</span>
                  </div>
                </div>
                <div className="d-sm-flex flex-row align-items-center gap-3 mt-3">
                  <div className="d-flex flex-row align-items-center justify-content-between gap-5 py-3 px-4 rounded border">
                    <div className="d-flex flex-column text-nowrap">
                      <span className='fs-5 fw-medium'>PayRoll</span>
                      <span className='fs-1 fw-bolder'>48</span>
                      <span className='fs-6 fw-medium text-secondary'>12 Men</span>
                      <span className='fs-6 fw-medium text-secondary'>12 Women</span>
                    </div>
                    <div className="d-flex flex-column">
                      <img src={Dash1} alt="" />
                      <span className='fs-6 fw-normal p-1 rounded text-nowrap' style={{ background: '#FFEFE7', fontSize:'5px' }}>+2% Past month</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center justify-content-between gap-5 py-3 px-3 rounded border">
                    <div className="d-flex flex-column text-nowrap">
                      <span className='fs-5 fw-medium'>Task Request</span>
                      <span className='fs-1 fw-bolder'>16</span>
                      <span className='fs-6 fw-medium text-secondary'>6 Men</span>
                      <span className='fs-6 fw-medium text-secondary'>10 Women</span>
                    </div>
                    <div className="d-flex flex-column">
                      <img src={Dash2} alt="" />
                      <span className='fs-6 fw-normal p-1 rounded text-nowrap' style={{ background: '#FFEFE7', fontSize:'5px' }}>+5% Past month</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="announcement-section border rounded p-2 mt-3">
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <span className='fs-6 fw-medium'>Announcement</span>
                  <div className="border rounded p-1">
                    <span className='text-secondary fs-6 fw-normal'>Today, 13 Sep 2021</span>
                    <i className="bi bi-chevron-down text-secondary"></i>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between border rounded px-3 py-1 my-2">
                  <div className="d-flex flex-column">
                    <span className='fs-6 fw-normal'>Outing schedule for every departement</span>
                    <span className='text-secondary fs-6'>5 Minutes ago</span>
                  </div>
                  <div className="">
                    <i className="bi bi-three-dots text-secondary"></i>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between border rounded px-3 py-1 my-2">
                  <div className="d-flex flex-column">
                    <span className='fs-6 fw-normal'>Meeting HR Department</span>
                    <span className='text-secondary fs-6'>Yesterday, 12:30 PM</span>
                  </div>
                  <div className="">
                    <i className="bi bi-three-dots text-secondary"></i>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between border rounded px-3 py-1 my-2">
                  <div className="d-flex flex-column">
                    <span className='fs-6 fw-normal'>IT Department need two more talents for UX/UI Designer position</span>
                    <span className='text-secondary fs-6'>Yesterday, 09:15 AM</span>
                  </div>
                  <div className="">
                    <i className="bi bi-three-dots text-secondary"></i>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <span className='text-danger fs-6 fw-medium'>See All Announcement</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="calender-section p-2">
                <span className='fs-6 fw-medium'>Calendar</span>
                <div className="p-3 m-2 text-center" >
                  <Calendar onChange={onChange} value={date}
                    formatMonthYear=
                    {(locale, date) =>
                      date.toLocaleDateString('en-US', { month: 'long' })
                    }
                    nextLabel={getNextMonth(date)} prevLabel={getPrevMonth(date)}
                    formatShortWeekday={formatShortWeekday}
                    className="border-0 text-decoration-none" />
                </div>
              </div>
              <div className="bday-cal-section p-2">
                <span className='fs-6 fw-medium'>Birthday Calendar</span>
                <div className="p-1 d-flex flex-row align-items-start justify-content-between my-2">
                  <div className="border rounded d-flex flex-column align-items-center my-3 mx-1 p-2">
                    <img src={People1} alt="" style={{height:'80px', width: '80px'}}/>
                    <span className='fs-6 fw-bolder mt-2'>Robert Whistable</span>
                    <span className='fs-6 text-secondary'>Product manager</span>
                    <span  className='fs-6 text-secondary'>15 feb 1998</span>
                  </div>
                  <div className="border rounded d-flex flex-column align-items-center my-3 mx-1 p-2">
                    <img src={People2} alt="" style={{height:'80px', width: '80px'}}/>
                    <span className='fs-6 fw-bolder mt-2'>Robert Whistable</span>
                    <span className='fs-6 text-secondary'>Product manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard