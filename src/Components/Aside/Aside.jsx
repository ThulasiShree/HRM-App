import React, { useState } from 'react'
import './Aside.css'
import { NavLink } from 'react-router-dom';

const Aside = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(true);

    const toggleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen)
    }

    return (
        <div className="container-fluid">
            <button className="fixed-top menu-toggle-btn mt-2 d-md-none" onClick={toggleSideBar}>
                <i className="bi bi-list fs-1"></i>
            </button>
            <aside style={{ width: '240px' }} className={`sideBar ${isSideBarOpen ? 'open' : ''}`}>
                <header className='text-center pb-3 pt-3'>
                    <span className='fs-4 fw-bolder text-center'>WeHR</span>
                </header>
                <nav>
                    <ul className='nav flex-column fw-medium fs-6 px-5 py-5'>
                        <NavLink className={({ isActive }) => isActive ? 'text-decoration-none text-secondary active-link' : 'text-decoration-none text-secondary'} to='/dashboard'><li className='d-flex gap-3 py-2'><i class="bi bi-columns-gap"></i>Dashboard</li></NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-decoration-none text-secondary active-link' : 'text-decoration-none text-secondary'} to='/employee'><li className='d-flex gap-3 py-2'><i class="bi bi-person-plus-fill"></i>Employee</li></NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-decoration-none text-secondary active-link' : 'text-decoration-none text-secondary'} to='/attendance'><li className='d-flex gap-3 py-2'><i class="bi bi-calendar2-event-fill"></i>Attendance</li></NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-decoration-none text-secondary active-link' : 'text-decoration-none text-secondary'} to='/payroll'><li className='d-flex gap-3 py-2'><i class="bi bi-people-fill"></i>PayRoll</li></NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-decoration-none text-secondary active-link' : 'text-decoration-none text-secondary'} to='/task'><li className='d-flex gap-3 py-2'><i class="bi bi-pie-chart-fill"></i>Task</li></NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-decoration-none text-secondary active-link' : 'text-decoration-none text-secondary'} to='/announcement'><li className='d-flex gap-3 py-2'><i class="bi bi-share-fill"></i>Announcement</li></NavLink>
                        <li className='text-secondary pt-5 pb-2'>OTHER</li>
                        <NavLink className={({ isActive }) => isActive ? 'text-decoration-none text-secondary active-link' : 'text-decoration-none text-secondary'} to='/support'><li className='d-flex gap-3 py-2'><i class="bi bi-headset"></i>Support</li></NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-decoration-none text-secondary active-link' : 'text-decoration-none text-secondary'} to='/settings'><li className='d-flex gap-3 py-2'><i class="bi bi-gear-fill"></i>Settings</li></NavLink>
                    </ul>
                </nav>
            </aside>
        </div>
    )
}

export default Aside