import React,{useState} from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
export default function MyNavbar() {
    const [active,setActive] = useState("");

    window.onscroll = ()=>{
        if(document.documentElement.scrollTop > 70){
            setActive("navActive")
        }else{
            setActive("")
        }
    }
  return (
    <React.Fragment>
        <Navbar expand fixed='top' className={active}>
            <Container>
                <Navbar.Brand className='text-light'>Tsenan'Tsika</Navbar.Brand>
                <Nav>
                    <Nav.Link className='text-white'>
                        <AiOutlineShoppingCart />
                        &nbsp;Panier
                    </Nav.Link>
                    <Nav.Link className='text-white'>
                        <FaUser />
                        &nbsp;Se connecter
                    </Nav.Link>
                </Nav>
                    
            </Container>
        </Navbar>
    </React.Fragment>
  )
}
