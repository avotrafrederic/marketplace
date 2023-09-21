import React from 'react'
import {Nav} from 'react-bootstrap'
import { MdHome,MdEdit } from 'react-icons/md';
import { MdPhone,MdOutlineMiscellaneousServices } from 'react-icons/md';
import { IoPricetag } from 'react-icons/io5';
export default function LeftNavbar() {
  return (
    <React.Fragment>
        <div className='leftnavbar'>
            <Nav>
                <Nav.Item>
                    <Nav.Link>
                        <MdHome />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <MdEdit />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <MdOutlineMiscellaneousServices/>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <IoPricetag />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <MdPhone />
                    </Nav.Link>
                </Nav.Item>
                
                
                
                
            </Nav>
        </div>
    </React.Fragment>
  )
}
