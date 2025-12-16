//=====================================================================================================================================================================================================
//                                                                                         REACT
//=====================================================================================================================================================================================================
import { Link } from "react-router";
import { useState } from "react";
import { useTheme } from '../context/ThemeContext';

//=====================================================================================================================================================================================================
//                                                                                        BOOTSTRAP
//=====================================================================================================================================================================================================
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import react from '../assets/react.svg';
import { Button } from "react-bootstrap";
import Collapse from 'react-bootstrap/Collapse';

export default function MenuComp() {
    const { botonBg, textBotonBg, botonBgBody, textBotonBgBody, setBotonBg, setTextBotonBg, setBotonBgBody, setTextBotonBgBody } = useTheme();

    const [open, setOpen] = useState(false);

    return (<header>
        <span className={`${textBotonBgBody}`}></span><span className={`${botonBgBody}`}></span>{/*Esto no hace nada*/}
        <Navbar bg={botonBg} data-bs-theme={botonBg} className="d-flex justify-content-center" style={{transition: "1s"}}>
            <Container className={`${textBotonBg}`}>
                <Navbar.Brand><img src={react}></img>React</Navbar.Brand>

                <Nav className="d-flex justify-content-center">
                    <div className="p-1">
                        <Link className={`text-decoration-none ${textBotonBg}`} to={''}>Inicio</Link>&nbsp;&nbsp;
                        <Link className={`text-decoration-none ${textBotonBg}`} to={'dinosaurios'}>Dinosaurios</Link>&nbsp;
                    </div>

                    <div>
                        <Button className={`border border-${botonBgBody}`} onClick={() => { setOpen(!open) }} aria-controls="example-collapse-text" aria-expanded={open} style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: "1s", background: "transparent"}}>
                            {
                                botonBg==='dark'
                                    ? <i className="bi bi-caret-up-fill"></i>
                                    : <i className="bi bi-caret-up-fill" style={{color: "black"}}></i>
                            }
                        </Button>

                        <Collapse in={open} className="position-absolute top-55 end-0 mt-2 p-2 bg-body rounded shadow">
                            <div id="example-collapse-text">
                                <Button variant="light" onClick={() => { setBotonBg('dark'); setTextBotonBg('text-light'); setBotonBgBody('light'); setTextBotonBgBody('text-dark') }}>Blanco</Button>
                                <Button variant="dark" onClick={() => { setBotonBg('light'); setTextBotonBg('text-dark'); setBotonBgBody('dark'); setTextBotonBgBody('text-light') }}>Negro</Button>
                            </div>
                        </Collapse>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    </header>)
}