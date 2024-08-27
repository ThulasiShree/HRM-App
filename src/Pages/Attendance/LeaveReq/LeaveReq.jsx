import React, { useEffect, useState } from 'react'
import Aside from '../../../Components/Aside/Aside'
import Header from '../../../Components/Header/Header'
import axios from 'axios'

const LeaveReq = () => {

  const [column, setColumn] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3030/empdetails")
      .then(res => {
        const empleaves = res.data[1].empleaves;

        // Check if the response data is valid and not empty
        if (empleaves && empleaves.length > 0) {
          console.log("employee leaves")
          setColumn(Object.keys(empleaves[0])); // Safely use Object.keys
          setRecords(empleaves);
        } else {
          console.log("employee else leaves")
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
            <table className='table text-secondary mt-3'>
              <thead>
                <tr>
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
                          Reuest Date
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
                  {/* <th scope="col">
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
                  </th> */}
                  <th scope='col'>
                    <tr>
                      <div className="dropdown fs-6">
                        <button className="border-0 bg-transparent dropdown-toggle fw-medium text-secondary" type="button">
                          Leave type
                        </button>
                        <div className="dropdown-menu bg-transporent border-0">
                          <div className="dropdown-item d-flex gap-2">
                            <input type="radio" name="dateType" id="joinedDate" value="joined-date" />
                            <label for="joinedDate">Casual Leave</label>
                          </div>
                          <div className="dropdown-item d-flex gap-2">
                            <input type="radio" name="dateType" id="createdDate" value="created-date" />
                            <label for="createdDate">Sick Leave</label>
                          </div>
                        </div>
                      </div>
                    </tr>
                  </th>
                  <th scope='col'>
                    <button className="text-secondary fw-medium border-0" type="button">
                      Reason
                    </button>
                  </th>
                  <th scope="col">
                    <div className="dropdown fs-6">
                      <button className="border-0 bg-transparent dropdown-toggle fw-medium text-secondary" type="button">
                        No Days
                      </button>
                      <div className="dropdown-menu bg-transporent border-0">
                        <div className="dropdown-item d-flex gap-2">
                          <input type="radio" name="dateType" id="joinedDate" value="joined-date" />
                          <label for="joinedDate">01</label>
                        </div>
                        <div className="dropdown-item d-flex gap-2">
                          <input type="radio" name="dateType" id="createdDate" value="created-date" />
                          <label for="createdDate">02</label>
                        </div>
                        <div className="dropdown-item d-flex gap-2">
                          <input type="radio" name="dateType" id="relevedDate" value="releved-date" />
                          <label for="relevedDate">03</label>
                        </div>
                        <div className="dropdown-item d-flex gap-2">
                          <input type="radio" name="dateType" id="relevedDate" value="releved-date" />
                          <label for="relevedDate">04</label>
                        </div>
                        <div className="dropdown-item d-flex gap-2">
                          <input type="radio" name="dateType" id="relevedDate" value="releved-date" />
                          <label for="relevedDate">05</label>
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
                      <td>
                        <div className="fw-medium fs-6">{d.name[0].ename}</div>
                        <div className="fs-6 text-secondary">{d.name[0].email}</div>
                      </td>
                      <td>
                        <div className="fs-6 text-secondary">
                          {d.reqdate}
                        </div>
                      </td>
                      <td>
                        <div className="fs-6 text-secondary">
                          {d.levtype}
                        </div>
                      </td>
                      <td>
                        <div className="fs-6 text-secondary">
                          {d.reason}
                        </div>
                      </td>
                      <td>
                        <div className="fs-6 text-secondary">
                          {d.days}
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

export default LeaveReq