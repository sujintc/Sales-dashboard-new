import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {BsFillGridFill} from 'react-icons/bs'
import {BiNotepad,BiSolidMessageAltCheck,BiSolidCalendarCheck,BiSolidGridAlt, BiColor} from 'react-icons/bi'
import {AiOutlineMedicineBox,AiOutlineSetting } from 'react-icons/ai'
import {MdPayments} from 'react-icons/md'
import "./page.css"

const Sidepage = () => {
    return (
        <div>
           
              <h1 style={{ color: 'blue' }}>GUVI Sales</h1>
           
           
            {/* //https://react-bootstrap.github.io/docs/components/navs */}
            
            <Container className='nav'>
           <Nav defaultActiveKey="/home" className="flex-column">
           <Nav.Link href="/home"> <BsFillGridFill/> Dashboard</Nav.Link> 
           <Nav.Link eventKey="link-1" style={{ color: 'black' }} ><BiNotepad/ >Lab test</Nav.Link>
          <Nav.Link eventKey="link-2"  style={{ color: 'black' }}>Appointment</Nav.Link>
          <Nav.Link eventKey="link-2"  style={{ color: 'black' }}><AiOutlineMedicineBox/>Medicine Order</Nav.Link>
          <Nav.Link eventKey="link-1"  style={{ color: 'black' }}><BiSolidMessageAltCheck/>Message</Nav.Link>
          <Nav.Link eventKey="link-2"  style={{ color: 'black' }}><MdPayments/>Payment</Nav.Link>
          <Nav.Link eventKey="/home"  style={{ color: 'black' }}><AiOutlineSetting/>Setting</Nav.Link>
          <Nav.Link eventKey="link-1"   style={{ color: 'black' }} className="navlink">
              <BiSolidGridAlt  style={{ color: 'black' }} /> Dashboard
            </Nav.Link>
            <Nav.Link eventKey="link-2" className="navlink" style={{ color: 'black' }}>
              <BiSolidCalendarCheck   />  Lab Test
            </Nav.Link>
           </Nav>
    </Container>
           
        </div>
    );
};

export default Sidepage;