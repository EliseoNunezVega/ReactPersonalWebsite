import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'

import {Layout, Navigation, Header, Content, Drawer} from 'react-mdl'
import { SocialIcon } from 'react-social-icons';

export class NavBar extends Component {

    render() {
        return (
            /*
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="//logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Eli's Survey
                </Navbar.Brand>
            </Navbar>
            */
            /*
            <Navbar bg="light" variant="warning">
                <Navbar.Brand href="#">Eliseo's Website</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link> <Link to="/"> Home </Link></Nav.Link> 
                <Nav.Link href="#Projects">Projects</Nav.Link>
                </Nav>
            </Navbar>
        */
    
       <div style={{height: '150px', position: 'relative'}}>
           
            <Layout style={{background: 'url(https://leandesign.com/wp/wp-content/uploads/2013/07/electronics-banner-02.jpg) center / cover'}}>
                <Header title = "Eliseo's Website" style={{color: 'white', fontFamily: 'Georgia,serif'}} transparent >
                <Navigation style={{color: 'gray', fontFamily: 'Georgia,serif'}}>
                        <Link to='/'>
                        <FontAwesomeIcon icon={faHome}/>
                        </Link>
                        <a href="https://www.linkedin.com/in/eliseonunezvega/">LinkedIn</a>
                        <a href="https://portfolium.com/EliseoNunez">Portfolium</a>
                        <a href="https://github.com/EliseoNunezVega">Github</a>
                </Navigation>
                </Header>
                <Drawer title="QuickLinks">
                    <Navigation>
                        <a href="https://www.linkedin.com/in/eliseonunezvega/">LinkedIn</a>
                        <a href="https://portfolium.com/EliseoNunez">Portfolium</a>
                        <a href="https://github.com/EliseoNunezVega">Github</a>
                    </Navigation>
                </Drawer>
                <Content />
            </Layout>
        </div>
        )
    }
}

export default NavBar
