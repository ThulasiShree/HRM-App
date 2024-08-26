import React from 'react'
import RightSideImg from '../Assets/SignInImage.jpg'
import Logo from '../Assets/Logo-Icon.png'
import CompanyIcon from '../Assets/Com-Icon.png'
import PwdIcon from '../Assets/Pwd-Icon.png'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <div className='container d-flex align-items-center justify-content-center'>
            <div className="row">
                <div className="col-md-6 bg-light px-5 py-3 d-flex flex-column justify-content-evenly">
                    <div className="logo-head d-flex align-items-center gap-3">
                        <img src={Logo} alt="" />
                        <span className='fs-4 fw-medium text-dark'>Your Logo</span>
                    </div>
                    <form className="d-flex flex-column">
                        <span className='fw-bold fs-1'>Sign Into</span>
                        <div className="mb-3">
                            <span className='fw-bolder fs-4'>Your Account</span>
                        </div>
                        <div className="mb-3 py-2 d-flex align-items-center gap-2">
                            <img src={CompanyIcon} alt="" />
                            <input type="text" className='form-control border-0' placeholder='Company ID' />
                        </div>
                        <div className="mb-3 py-2 d-flex align-items-center gap-2">
                            <img src={PwdIcon} alt="" />
                            <input type="password" className='form-control border-0' placeholder='Password' />
                        </div>
                        <div className="mb-3 pb-4 form-check">
                            <input type="checkbox" className='form-check-input' />
                            <label className="form-check-label text-light-emphasis">Remember Me</label>
                        </div>

                        <Link to='/dashboard'>
                            <button type="submit" className="form-control btn btn-danger">Submit</button>
                        </Link>
                    </form>
                </div>
                <div className="col-md-6">
                    <img className="img-thumbnail border-0" src={RightSideImg} alt="Rightside-Image" />
                </div>
            </div>
        </div>
    )
}

export default SignIn