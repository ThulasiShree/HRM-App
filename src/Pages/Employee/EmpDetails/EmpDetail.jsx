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
        axios.get("http://localhost:3030/empdetails")
            .then(res => {
                const empdetails = res.data[0].empdetail;

                // Check if the response data is valid and not empty
                if (empdetails && empdetails.length > 0) {
                    setColumn(Object.keys(empdetails[0])); // Safely use Object.keys
                    setRecords(empdetails);
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
                                <tr>
                                    <th scope='col'></th>
                                    <th scope='col'></th>
                                    <th scope="col">
                                        <div className="dropdown fs-6">
                                            <button className="border-0 bg-transparent dropdown-toggle fw-medium text-secondary" type="button">
                                                Name
                                            </button>
                                        </div>
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
                                    </th>
                                    <th scope="col">
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
                                    </th>
                                    <th scope="col" className='text-center'>
                                        <div className="dropdown fs-6">
                                            <button className="border-0 bg-transparent dropdown-toggle fw-medium text-secondary" type="button">
                                                Options
                                            </button>
                                            <div className="dropdown-menu bg-transporent border-0">
                                                <div className="dropdown-item d-flex gap-2">

                                                </div>
                                                <div className="dropdown-item d-flex gap-2">

                                                </div>
                                                <div className="dropdown-item d-flex gap-2">

                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    records.map((d, i) => (
                                        <tr key={i}>
                                            <td><input type="radio" className="fs-5" name={`select-${i}`} /></td>
                                            <td className="fw-medium fs-6">{d.id}</td>
                                            <td>
                                                <div className="fw-medium fs-6">{d.name[0].ename}</div>
                                                <div className="fs-6 text-secondary">{d.name[0].email}</div>
                                            </td>
                                            <td>
                                                <div className="fs-6 text-secondary">
                                                    {new Date(d.date.$date).toLocaleDateString()}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="fs-6 text-secondary">
                                                    {d.des}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="fs-6 text-secondary">
                                                    {d.status}
                                                </div>
                                            </td>
                                            <td className='text-center'>
                                                <div className="fs-6 text-secondary">
                                                    <a href="">
                                                        <i className="bi bi-three-dots text-secondary"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
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