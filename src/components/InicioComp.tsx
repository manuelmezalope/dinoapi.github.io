//=====================================================================================================================================================================================================
//                                                                                         REACT
//=====================================================================================================================================================================================================
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

//=====================================================================================================================================================================================================
//                                                                                         SERVICIO
//=====================================================================================================================================================================================================
import { DinosaurioService } from "../service/dinosaurio-service";

//=====================================================================================================================================================================================================
//                                                                                         INTERFACE
//=====================================================================================================================================================================================================
import type { IDinosaurio } from "../model/dinosaurio-interface";

//=====================================================================================================================================================================================================
//                                                                                         BOOTSTRAP
//=====================================================================================================================================================================================================
import Container from 'react-bootstrap/Container';
import { Card, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Modal } from "react-bootstrap";

//=====================================================================================================================================================================================================
//                                                                                         IMÁGENES
//=====================================================================================================================================================================================================
import plantas from '../assets/imagenes/alimentacion/plantas.jpg';
import peces from '../assets/imagenes/alimentacion/peces.jpg'
import carne from '../assets/imagenes/alimentacion/carne.jpg';
import todo from '../assets/imagenes/alimentacion/todo.jpg';

export default function InicioComp() {
    const service = new DinosaurioService();

    //=================================================================================================================================================================================================
    //                                                                                       MOSTRAR REGISTROS
    //=================================================================================================================================================================================================
    const [DinosaurioList, setDinosaurioList] = useState<IDinosaurio[]>([]);

    const getDinosaurio = async () => {
        await service.getAll().then(data => setDinosaurioList(data))
    }
    useEffect(() => {
        getDinosaurio();
    }, []);

    //=================================================================================================================================================================================================
    //                                                                                PARA MOSTRAR MODAL DE DETALLES
    //=================================================================================================================================================================================================
    const [detallesDinosaurio, setDetallesDinosaurio] = useState<IDinosaurio | null>(null);

    const [showDetalles, setShowDetalles] = useState(false);
    const handleCloseDetalles = () => setShowDetalles(false);
    const handleShowDetalles = (dinosaurio: IDinosaurio) => {
        setShowDetalles(true);
        setDetallesDinosaurio(dinosaurio);
    }

    //=================================================================================================================================================================================================
    //                                                                                  PARA PANTALLA COMPLETA
    //=================================================================================================================================================================================================
    const values = [true];
    const [fullscreen, setFullscreen] = useState<string | true>("true");

    //=================================================================================================================================================================================================
    //                                                                             PARA MOSTRAR MODAL DE REGISTROS
    //=================================================================================================================================================================================================
    const [showDinosaurios, setShowDinosaurios] = useState(false);
    const handleCloseDinosaurios = () => setShowDinosaurios(false);
    function handleShowDinosaurios(breakpoint: boolean) {
        setFullscreen(breakpoint ? true : "false");
        setShowDinosaurios(true)
    }

    //=================================================================================================================================================================================================
    //                                                                           PARA MOSTRAR MODAL DE ALIMENTACIÓN
    //=================================================================================================================================================================================================
    const [showEra, setShowEra] = useState(false);
    const handleCloseEra = () => setShowEra(false);
    const handleShowEra = () => setShowEra(true);

    //=================================================================================================================================================================================================
    //                                                                                        FILTROS
    //=================================================================================================================================================================================================
    const [alimentacionFilter, setAlimentacionFilter] = useState('Carne');
    const [eraFilter, setEraFilter] = useState('Triásico');

    const filtro = DinosaurioList.filter(dino =>
        dino.era === eraFilter && dino.alimentacion === alimentacionFilter
    );

    //=================================================================================================================================================================================================
    //                                                                                     CAMBIAR FONDO
    //=================================================================================================================================================================================================

    const { botonBg, textBotonBg, botonBgBody, textBotonBgBody } = useTheme();

    const boton = botonBg;
    const textboton = textBotonBg;
    const botonbgbody = botonBgBody;
    const textbotonbgbody = textBotonBgBody;

    return (<>
    <span className={`${textboton}`}></span><span className={`${boton}`}></span>{/*Esto no hace nada*/}
        <div className={`bg-${botonbgbody}`} style={{transition: "1s"}}>
            <Container data-bs-theme={`${botonbgbody}`}>
                <br />
                <h1 className={`${textbotonbgbody}`}>Inicio</h1>
                <br />

                <Container>
                    <Row className="mb-4">
                        <Card style={{transition: "1s"}}>
                            <Card.Body>
                                <Card.Title>Triásico</Card.Title>
                                <Card.Text>El Triásico es una división de la escala temporal geológica, es uno de los tres períodos geológicos de la Era Mesozoica; comenzó hace 251,0 ± 0,4 millones de años y acabó hace 199,6 ± 0,6 millones de años. Como ocurre con la mayoría de los períodos geológicos, las fechas exactas de inicio y fin son inciertas por unos pocos millones de años. En el caso de este período, tanto el inicio como final están marcados por importantes eventos de extinción: la extinción masiva del Pérmico-Triásico y la del Triásico-Jurásico.</Card.Text>
                                <div>
                                    <Button className="d-flex justify-content-left" variant="success" onClick={() => { handleShowEra(); setEraFilter('Triásico') }}>Ver Más</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>

                    <Row>
                        <Card className="mb-4" style={{transition: "1s"}}>
                            <Card.Body>
                                <Card.Title>Jurásico</Card.Title>
                                <Card.Text>El Jurásico es una división de la escala temporal geológica, es el sistema y período geológico central de la Era Mesozoica, que comenzó hace 199,6 ± 0,6 millones de años y acabó hace 145,5 ± 4,0 millones de años. Como ocurre con la mayoría de las eras geológicas, la fechas exactas de inicio y fin de este período, como en los demás sistemas, son convencionales, conforme a ciertos criterios que se establecen para su datación, por lo que se admite algún error de magnitud en miles o millones de años. Es posterior al Triásico y anterior al Cretáceo. La denominación Jurásico procede de formaciones sedimentarias carbonatadas de la región europea del Jura, en los Alpes.</Card.Text>
                                <div>
                                    <Button className="d-flex justify-content-left" variant="success" onClick={() => { handleShowEra(); setEraFilter('Jurásico') }}>Ver Más</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>

                    <Row>
                        <Card className="mb-4" style={{transition: "1s"}}>
                            <Card.Body>
                                <Card.Title>Cretácico</Card.Title>
                                <Card.Text>El Cretácico, o Cretáceo es una división de la escala temporal geológica, es el tercer y último período de la Era Mesozoica; comenzó hace 145,5 ± 4,0 millones de años y terminó hace 65,5 ± 0,3 millones de años. Está comúnmente dividido en dos mitades, conocidas como Cretácico Inferior y Cretácico Superior. Con una duración de unos 80 millones de años, es el período Fanerozoico más extenso, y es, incluso, más largo que toda la Era Cenozoica.</Card.Text>
                                <div>
                                    <Button className="d-flex justify-content-left" variant="success" onClick={() => { handleShowEra(); setEraFilter('Cretácico') }}>Ver Más</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>

                {
                    //=================================================================================================================================================================================
                    //                                                                          MODAL DE ALIMENTACIÓN
                    //=================================================================================================================================================================================
                }
                <Modal data-bs-theme={`${botonbgbody}`} show={showEra} onHide={handleCloseEra} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Alimentación</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Card.Body>
                            <Row className="text-center">
                                <Col>
                                    <Card className="mb-4">
                                        <Card.Img variant="top" src={carne} style={{height:115}} />
                                        <Card.Body>
                                            <Card.Title>Carne</Card.Title>
                                            {values.map((v, idx) => (
                                                <Button variant="success" key={idx} className="me-2 mb-2" onClick={() => { handleShowDinosaurios(v); setAlimentacionFilter('Carne') }}>
                                                    Ver más
                                                </Button>
                                            ))}
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className="mb-4">
                                        <Card.Img variant="top" src={plantas} style={{height:115}} />
                                        <Card.Body>
                                            <Card.Title>Plantas</Card.Title>
                                            {values.map((v, idx) => (
                                                <Button variant="success" key={idx} className="me-2 mb-2" onClick={() => { handleShowDinosaurios(v); setAlimentacionFilter('Plantas') }}>
                                                    Ver más
                                                </Button>
                                            ))}
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className="mb-4">
                                        <Card.Img variant="top" src={peces} style={{height:115}} />
                                        <Card.Body>
                                            <Card.Title>Peces</Card.Title>
                                            {values.map((v, idx) => (
                                                <Button variant="success" key={idx} className="me-2 mb-2" onClick={() => { handleShowDinosaurios(v); setAlimentacionFilter('Peces') }}>
                                                    Ver más
                                                </Button>
                                            ))}
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className="mb-4">
                                        <Card.Img variant="top" src={todo} style={{height:115}} />
                                        <Card.Body>
                                            <Card.Title>Todo</Card.Title>
                                            {values.map((v, idx) => (
                                                <Button variant="success" key={idx} className="me-2 mb-2" onClick={() => { handleShowDinosaurios(v); setAlimentacionFilter('Todo') }}>
                                                    Ver más
                                                </Button>
                                            ))}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseEra}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>

                {
                    //=================================================================================================================================================================================
                    //                                                                          MODAL DE REGISTROS
                    //=================================================================================================================================================================================
                }
                <Modal data-bs-theme={`${botonbgbody}`} show={showDinosaurios} fullscreen={fullscreen} onHide={handleCloseDinosaurios} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Dinosaurios</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {DinosaurioList.length == 0
                            ? <p>Sin datos</p>
                            : <Container>
                                <Row className="justify-content-center">
                                    {filtro.map((dino) => (
                                        <Col key={dino.id} md={3} className="mb-4 d-flex justify-content-center">
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Body>
                                                    <Card.Title>{dino.nombre}</Card.Title>
                                                    <Card.Text>
                                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                                    </Card.Text>
                                                    <Button variant="success" onClick={() => handleShowDetalles(dino)}>Ver Más</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        }
                    </Modal.Body>
                </Modal>

                {
                    //=================================================================================================================================================================================
                    //                                                                          MODAL DE DETALLES
                    //=================================================================================================================================================================================
                }
                <Modal data-bs-theme={`${botonbgbody}`} show={showDetalles} onHide={handleCloseDetalles} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Detalles Dinosaurios</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Card.Body>
                            <Card.Text>Especie: {detallesDinosaurio?.especie}</Card.Text>
                            <Card.Text>Tipo: {detallesDinosaurio?.tipo}</Card.Text>
                            <Card.Text>Era: {detallesDinosaurio?.era}</Card.Text>
                            <Card.Text>Alimentación: {detallesDinosaurio?.alimentacion}</Card.Text>
                        </Card.Body>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseDetalles}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    </>)
}