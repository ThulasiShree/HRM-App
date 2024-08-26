import React from 'react'
import './Header.css'
import { Form, Button, InputGroup } from 'react-bootstrap';
import PersonIcon from '../../Assets/person-img.png'

const Header = () => {
  return (
    <div className='sticky-top bg-light header d-flex flex-row py-3 border-0 ms-4'>
      <div className="col-md-3 border rounded">
        <Form>
          <InputGroup>
            <Form.Control type="text" placeholder="Search Employee" aria-label="Search" className='search-text border-0' />
            <Button className="search-btn" variant="">
              <i className="bi bi-search"></i>
            </Button>
          </InputGroup>
        </Form>
      </div>
      <div className="col-md-4"></div>
      <div className="msg-align col-md-2 ms-4 d-flex flex-row justify-content-evenly align-items-center">
        <i className="bi bi-bell-fill text-secondary fs-5"></i>
        <i className="bi bi-chat-left-dots-fill text-secondary fs-5"></i>
      </div>
      <div className='col-md-2'>
        <div className="personal-info d-flex justify-content-between align-items-center">
          <img src={PersonIcon} alt='Person-Img'></img>
          <span className='person-name'>Admirra John</span>
          <i class="bi bi-chevron-down"></i>
        </div>
      </div>
    </div>
  )
}

export default Header