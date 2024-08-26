import React from 'react'
import Aside from '../Aside/Aside'
import Header from '../Header/Header'
import { InputGroup } from 'react-bootstrap'
import './AddEmp.css'

const AddEmp = () => {
    return (
        <div>
            <Aside />
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-10">
                    <Header />
                    <form className='ms-3'>
                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        <span className='fs-5 fw-normal'>Add details of an employee</span>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                    <div class="accordion-body">
                                        <div className="d-flex flex-row justify-content-between mt-3">
                                            <div className="d-flex flex-column ">
                                                <label htmlFor="">Employee Name <span className='text-danger'>*</span></label>
                                                <input type="text" placeholder='Enter Employee Name' className='p-3 pe-5 mt-2 rounded text-secondary border border-light-subtle' />
                                            </div>
                                            <div className="d-flex flex-column ">
                                                <label htmlFor="">Employee Number <span className='text-danger'>*</span></label>
                                                <input type="text" placeholder='11D0012' className='p-3 pe-5 mt-2 rounded border border-light-subtle' />
                                            </div>
                                            <div className="d-flex flex-column ">
                                                <label htmlFor="">Date of joining <span className='text-danger'>*</span></label>
                                                <InputGroup type="text" className='d-flex gap-5 p-3 pe-5 mt-2 rounded text-secondary border border-light-subtle'>
                                                    Enter Joining date
                                                    <i class="bi bi-calendar2-event"></i>
                                                </InputGroup>
                                            </div>
                                            <div className=""></div>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between mt-3">
                                            <div className="d-flex flex-column ">
                                                <label htmlFor="">Email Id <span className='text-danger'>*</span></label>
                                                <input type="text" placeholder='Enter Email id' className='p-3 pe-5 mt-2 rounded text-secondary border border-light-subtle' />
                                            </div>
                                            <div className="d-flex flex-column ">
                                                <label htmlFor="">Mobile Number <span className='text-danger'>*</span></label>
                                                <input type="text" placeholder='Enter Mobile Number' className='p-3 pe-5 mt-2 rounded text-secondary border border-light-subtle' />
                                            </div>
                                            <div className="d-flex flex-column ">
                                                <label htmlFor="">Employee Status <span className='text-danger'>*</span></label>
                                                <InputGroup type="text" className='d-flex gap-5 p-3 pe-5 mt-2 rounded text-secondary border border-light-subtle'>
                                                    Employee Status
                                                    <i class="bi bi-chevron-down"></i>
                                                </InputGroup>
                                            </div>
                                            <div className=""></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        <span className='fs-5 fw-normal'>Personal Details </span>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <div className="d-flex flex-row justify-content-between mt-3">
                                            <div className="d-flex flex-column ">
                                                <label htmlFor="">Date Of Birth <span className='text-danger'>*</span></label>
                                                <InputGroup type="text" className='d-flex gap-5 p-3 pe-5 mt-2 rounded text-secondary border border-light-subtle'>
                                                    Enter Date Of Birth
                                                    <i class="bi bi-calendar2-event"></i>
                                                </InputGroup>
                                            </div>
                                            <div className="d-flex flex-column ">
                                                <label htmlFor="">Gender <span className='text-danger'>*</span></label>
                                                <select className='d-flex gap-5 p-3 pe-5 mt-2 rounded text-secondary border border-light-subtle'>
                                                    <option value="">Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                            <div className="d-flex flex-column ">
                                                <label htmlFor="">Marital Status <span className='text-danger'>*</span></label>
                                                <select className='d-flex gap-5 p-3 pe-5 mt-2 rounded text-secondary border border-light-subtle'>
                                                    <option value="">Marital Status</option>
                                                    <option value="Male">Married</option>
                                                    <option value="Female">Unmarried</option>
                                                </select>
                                            </div>
                                            <div className=""></div>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between mt-3">
                                            <div className="d-flex flex-column ">
                                                <label htmlFor="">Is Physical Challanged <span className='text-danger'>*</span></label>
                                                <select className='d-flex gap-5 p-3 pe-5 mt-2 rounded text-secondary border border-light-subtle'>
                                                    <option value="">Yes</option>
                                                    <option value="Male">No</option>
                                                </select>
                                            </div>
                                            <div className="d-flex flex-column ">
                                                <label htmlFor="">Blood Group<span className='text-danger'>*</span></label>
                                                <select className='d-flex gap-5 p-3 pe-5 mt-2 rounded text-secondary border border-light-subtle'>
                                                    <option value="">A+</option>
                                                    <option value="">A-</option>
                                                    <option value="">B+</option>
                                                    <option value="">B-</option>
                                                    <option value="">O+</option>
                                                    <option value="">O-</option>
                                                    <option value="">AB+</option>
                                                    <option value="">AB-</option>
                                                </select>
                                            </div>
                                            <div className="d-flex flex-column ">
                                                <label htmlFor="">Personal Email id <span className='text-danger'>*</span></label>
                                                <input type="text" placeholder='Enter Email id' className='p-3 pe-5 mt-2 rounded text-secondary border border-light-subtle' />
                                            </div>
                                            <div className=""></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        <span className='fs-5 fw-normal'> Department </span>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <div className='d-flex flex-column'>
                                            <input type='text' placeholder='Department 1' className='gap-5 p-3 pe-5 mt-2 rounded text-secondary border border-light-subtle'></input>
                                            <input type='text' placeholder='Department 2' className='gap-5 p-3 pe-5 mt-2 rounded text-secondary border border-light-subtle'></input>
                                            <input type='text' placeholder='Department 3' className='gap-5 p-3 pe-5 mt-2 rounded text-secondary border border-light-subtle'></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-5 d-flex flex-row align-items-center justify-content-between">
                            <span className='fs-5 fw-normal'>Configuration</span>
                            <div className="d-flex flex-row align-items-center gap-5 mx-5">
                                <button className='btn btn-outline-dark d-flex align-items-center justify-content-around rounded'>Cancel</button>
                                <button className='btn btn-outline-dark d-flex align-items-center justify-content-around rounded'>Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddEmp