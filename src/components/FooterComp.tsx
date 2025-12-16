//=====================================================================================================================================================================================================
//                                                                                         REACT
//=====================================================================================================================================================================================================
import { useTheme } from '../context/ThemeContext';              

//=====================================================================================================================================================================================================
//                                                                                       BOOTSTRAP
//=====================================================================================================================================================================================================
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

export default function FooterComp() {
    const { botonBg, textBotonBg, botonBgBody, textBotonBgBody } = useTheme();

    return (<footer>
        <span className={`${textBotonBgBody}`}></span><span className={`${botonBgBody}`}></span>{/*Esto no hace nada*/}
        <Navbar bg={`${botonBg}`} data-bs-theme={`${botonBg}`} style={{transition: "1s"}}>
            <Container className='d-flex justify-content-center p-2'>
                <Row>
                    <Nav className={`${textBotonBg} d-flex justify-content-center`} >
                        Información sacada de:&nbsp;<a className={`text-decoration-none text-light ${textBotonBg}`} href="https://www.mundoprehistorico.com/mesozoico/"> Mundo Prehistórico</a>
                    </Nav>

                    <Nav className='d-flex justify-content-center'>
                        <a href="https://github.com/"><i className="bi bi-github bg-transparent"></i></a>&nbsp;
                        <a href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a>&nbsp;
                        <a href="https://x.com/"><i className="bi bi-twitter-x"></i></a>
                    </Nav>
                </Row>
            </Container>
        </Navbar>
    </footer>)
}