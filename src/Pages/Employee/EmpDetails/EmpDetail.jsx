import React, { useEffect, useState } from 'react'
import Aside from '../../../Components/Aside/Aside'
import Header from '../../../Components/Header/Header'
import { Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './EmpDetails.css'
import axios from 'axios';

const EmpDetail = () => {

    const [column, setColumn] = useState([]);
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3030/0")
            .then( res => {
                // Check if the response data is valid and not empty
                if (res.data && res.data.length > 0) {
                    setColumn(Object.keys(res.data[0])); // Safely use Object.keys
                    setRecords(res.data);
                } else {
                    // Handle empty data case
                    setColumn([]);
                    setRecords([]);
                }
            
            })
            .catch(err => {
                console.error(err);
                // Optionally, set default values in case of an error
                setColumn([]);
                setRecords([]);
            });
    }, [])

    return (
        <div>
            <Aside />
            <div className='row'>
                <div className="col-md-2"></div>
                <div className="col-md-10">
                    <Header />
                    <div className='d-flex flex-row justify-content-between mt-4 ms-3'>
                        <span className='fs-4 fw-medium'>Employee</span>
                        <div className='d-flex gap-4 mx-5'>
                            <button className='btn btn-outline-dark d-flex align-items-center justify-content-around rounded'>
                                <i className="bi bi-plus fs-5"></i>
                                Import Excel
                            </button>
                            <Link to='/employee/empdetail/addemp' style={{ textDecoration: 'none' }}>
                                <button className='btn btn-outline-dark d-flex align-items-center justify-content-around rounded'>
                                    <i className="bi bi-plus fs-5"></i>
                                    Add Employee
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="mx-4 my-4">
                        <div className="d-flex flex-row align-items-center justify-content-between">
                            <div className="d-flex gap-3">
                                <span className='fs-5 fw-medium'>employee</span>
                                <span className='fs-5 fw-medium text-secondary'>250</span>
                            </div>
                            <Form>
                                <InputGroup>
                                    <Form.Control type="text" placeholder="Search Employee" aria-label="Search" className='search-text border-0' />
                                    <Button className="search-btn" variant="">
                                        <i className="bi bi-search"></i>
                                    </Button>
                                </InputGroup>
                            </Form>
                        </div>

                        <table className='table text-secondary mt-3'>
                            <thead>
                                <th scope="col"></th>
                                {column.map((c, i) => {
                                    <th key={i} scope="col">
                                        {c}
                                    </th>
                                })}



                                {/* <th scope="col">
                                    <tr>
                                        <div className="dropdown fs-6">
                                            <button className="border-0 bg-transparent dropdown-toggle fw-medium text-secondary" type="button">
                                                Name
                                            </button>
                                        </div>
                                    </tr>
                                </th>
                                <th scope="col">
                                    <tr>
                                        <div className="dropdown fs-6">
                                            <button className="border-0 bg-transparent dropdown-toggle fw-medium text-secondary" type="button">
                                                Join Date
                                            </button>
                                            <div className="dropdown-menu bg-transporent border-0">
                                                <div className="dropdown-item d-flex gap-2">
                                                    <input type="radio" name="dateType" id="joinedDate" value="joined-date" />
                                                    <label for="joinedDate">Joined Date</label>
                                                </div>
                                                <div className="dropdown-item d-flex gap-2">
                                                    <input type="radio" name="dateType" id="createdDate" value="created-date" />
                                                    <label for="createdDate">Created Date</label>
                                                </div>
                                                <div className="dropdown-item d-flex gap-2">
                                                    <input type="radio" name="dateType" id="relevedDate" value="releved-date" />
                                                    <label for="relevedDate">Releved Date</label>
                                                </div>
                                                <div className="dropdown-item d-flex gap-2">
                                                    <input type="radio" name="dateType" id="salaryHikeDate" value="salary-hike-date" />
                                                    <label for="salaryHikeDate">Salary Hike Date</label>
                                                </div>
                                            </div>
                                        </div>
                                    </tr>
                                </th>
                                <th scope="col">
                                    <tr>
                                        <div className="dropdown fs-6">
                                            <button className="border-0 bg-transparent dropdown-toggle fw-medium text-secondary" type="button">
                                                Designation
                                            </button>
                                            <div className="dropdown-menu bg-transporent border-0">
                                                <div className="dropdown-item d-flex gap-2">
                                                    <input type="radio" name="dateType" id="joinedDate" value="joined-date" />
                                                    <label for="joinedDate">Software Engineer</label>
                                                </div>
                                                <div className="dropdown-item d-flex gap-2">
                                                    <input type="radio" name="dateType" id="createdDate" value="created-date" />
                                                    <label for="createdDate">Manual Tester</label>
                                                </div>
                                                <div className="dropdown-item d-flex gap-2">
                                                    <input type="radio" name="dateType" id="relevedDate" value="releved-date" />
                                                    <label for="relevedDate">Automation Tester</label>
                                                </div>
                                            </div>
                                        </div>
                                    </tr>
                                </th>
                                <th scope="col">
                                    <tr>
                                        <div className="dropdown fs-6">
                                            <button className="border-0 bg-transparent dropdown-toggle fw-medium text-secondary" type="button">
                                                Status
                                            </button>
                                            <div className="dropdown-menu bg-transporent border-0">
                                                <div className="dropdown-item d-flex gap-2">
                                                    <input type="radio" name="dateType" id="joinedDate" value="joined-date" />
                                                    <label for="joinedDate">Confirmed</label>
                                                </div>
                                                <div className="dropdown-item d-flex gap-2">
                                                    <input type="radio" name="dateType" id="createdDate" value="created-date" />
                                                    <label for="createdDate">Probation</label>
                                                </div>
                                            </div>
                                        </div>
                                    </tr>
                                </th>
                                <th scope="col">
                                    <tr>
                                        <div className="dropdown fs-6">
                                            <button className="border-0 bg-transparent dropdown-toggle fw-medium text-secondary" type="button">
                                                Options
                                            </button>
                                            <div className="dropdown-menu bg-transporent border-0">
                                                <div className="dropdown-item d-flex gap-2">
                                                    <input type="radio" name="dateType" id="joinedDate" value="joined-date" />
                                                    <label for="joinedDate">Software Engineer</label>
                                                </div>
                                                <div className="dropdown-item d-flex gap-2">
                                                    <input type="radio" name="dateType" id="createdDate" value="created-date" />
                                                    <label for="createdDate">Manual Tester</label>
                                                </div>
                                                <div className="dropdown-item d-flex gap-2">
                                                    <input type="radio" name="dateType" id="relevedDate" value="releved-date" />
                                                    <label for="relevedDate">Automation Tester</label>
                                                </div>
                                            </div>
                                        </div>
                                    </tr>
                                </th> */}
                            </thead>
                            <tbody>
                                {
                                    records.map((d, i) => {
                                        <tr key={i}>
                                            <td><input type="radio" name={`select-${i}`} /></td>
                                            <td>{d.id}</td>
                                            <td>{d.name}</td>
                                            <td>{d.date}</td>
                                            <td>{d.des}</td>
                                            <td>{d.status}</td>
                                        </tr>
                                    })
                                }
                                {/* <tr>
                                    <th><input type="radio" name="" id="" /></th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><i className="bi bi-three-dots text-secondary"></i></td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpDetail