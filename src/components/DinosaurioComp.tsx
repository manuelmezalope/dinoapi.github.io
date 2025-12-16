//=====================================================================================================================================================================================================
//                                                                                         REACT
//=====================================================================================================================================================================================================
import { useEffect, useState, type FormEvent } from "react";
import { useTheme } from '../context/ThemeContext';

//=====================================================================================================================================================================================================
//                                                                                       SERVICIO
//=====================================================================================================================================================================================================
import { DinosaurioService } from "../service/dinosaurio-service";

//=====================================================================================================================================================================================================
//                                                                                       INTERFAZ
//=====================================================================================================================================================================================================
import type { IDinosaurio } from "../model/dinosaurio-interface";

//=====================================================================================================================================================================================================
//                                                                                       BOOTSTRAP
//=====================================================================================================================================================================================================
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

//=====================================================================================================================================================================================================
//                                                                                       SWEET ALERT
//=====================================================================================================================================================================================================
import Swal from 'sweetalert2';

export default function DinosaurioComp() {
    const service = new DinosaurioService();

    //=================================================================================================================================================================================================
    //                                                                                        CONFIGURAR VARIABLES
    //=================================================================================================================================================================================================
    const [DinosaurioList, setDinosaurioList] = useState<IDinosaurio[]>([]);
    const [editDinosaurio, setEditDinosaurio] = useState<IDinosaurio | null>(null);

    const [nombre, setNombre] = useState('');
    const [especie, setEspecie] = useState('');
    const [tipo, setTipo] = useState('');
    const [era, setEra] = useState('');
    const [alimentacion, setAlimentacion] = useState('');

    const getDinosaurio = async () => {
        await service.getAll().then(data => setDinosaurioList(data))
    }
    useEffect(() => {
        getDinosaurio();
    }, []);

    //=================================================================================================================================================================================================
    //                                                                                         INSERTAR REGISTROS
    //=================================================================================================================================================================================================
    const añadirDinosaurio = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const model: IDinosaurio = {
            nombre: nombre,
            especie: especie,
            tipo: tipo,
            era: era,
            alimentacion: alimentacion,
        }
        const textColor = textbotonbgbody === 'dark' ? '#FFFFFF' : '#000000';
        const bgColor = botonbgbody === 'dark' ? '#333333' : '#FFFFFF';

        if (nombre === "") {
            Swal.fire({
                title: '¡Espera!',
                text: `El nombre no puede estar vacío`,
                icon: 'warning',
                color: textColor,
                background: bgColor
            })
            return;
        }

        if (especie === "") {
            Swal.fire({
                title: '¡Espera!',
                text: `La especie no puede estar vacío`,
                icon: 'warning',
                color: textColor,
                background: bgColor
            })
            return;
        }

        if (tipo === "") {
            Swal.fire({
                title: '¡Espera!',
                text: `El tipo no puede estar vacío`,
                icon: 'warning',
                color: textColor,
                background: bgColor
            })
            return;
        }

        if (era === "") {
            Swal.fire({
                title: '¡Espera!',
                text: `La era no puede estar vacío`,
                icon: 'warning',
                color: textColor,
                background: bgColor
            })
            return;
        }

        if (alimentacion === "") {
            Swal.fire({
                title: '¡Espera!',
                text: `La alimentacion no puede estar vacío`,
                icon: 'warning',
                color: textColor,
                background: bgColor
            })
            return;
        }

        service.insert(model)
            .then(() => {
                Swal.fire({
                    title: 'Éxito!',
                    text: `Se registró el dinosaurio correctamente`,
                    icon: 'success',
                    color: textColor,
                    background: bgColor
                })

                getDinosaurio();
                setNombre('');
                setEspecie('');
                setTipo('');
                setEra('');
                setAlimentacion('');
            })
            .catch(e => { console.error('Error: ', e) })
    }

    const [showInsert, setShowInsert] = useState(false);
    const handleCloseInsert = () => setShowInsert(false);
    const handleShowInsert = () => {
        setShowInsert(true);

        setNombre('');
        setEspecie('');
        setTipo('');
        setEra('');
        setAlimentacion('');
    };

    //=================================================================================================================================================================================================
    //                                                                                        ACTUALIZAR REGISTROS
    //=================================================================================================================================================================================================
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = (dinosaurio: IDinosaurio) => {
        setShowEdit(true);
        setEditDinosaurio(dinosaurio);

        setNombre(dinosaurio.nombre);
        setEspecie(dinosaurio.especie);
        setTipo(dinosaurio.tipo);
        setEra(dinosaurio.era);
        setAlimentacion(dinosaurio.alimentacion)
    }

    const actualizarDinosaurio = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editDinosaurio?.id) return;

        const model: IDinosaurio = { nombre, especie, tipo, era, alimentacion };

        const textColor = textbotonbgbody === 'dark' ? '#FFFFFF' : '#000000';
        const bgColor = botonbgbody === 'dark' ? '#333333' : '#FFFFFF';

        if (nombre === "") {
            Swal.fire({
                title: '¡Espera!',
                text: `El nombre no puede estar vacío`,
                icon: 'warning',
                color: textColor,
                background: bgColor
            })
            return;
        }

        if (especie === "") {
            Swal.fire({
                title: '¡Espera!',
                text: `La especie no puede estar vacío`,
                icon: 'warning',
                color: textColor,
                background: bgColor
            })
            return;
        }

        if (tipo === "") {
            Swal.fire({
                title: '¡Espera!',
                text: `El tipo no puede estar vacío`,
                icon: 'warning',
                color: textColor,
                background: bgColor
            })
            return;
        }

        if (era === "") {
            Swal.fire({
                title: '¡Espera!',
                text: `La era no puede estar vacío`,
                icon: 'warning',
                color: textColor,
                background: bgColor
            })
            return;
        }

        if (alimentacion === "") {
            Swal.fire({
                title: '¡Espera!',
                text: `La alimentacion no puede estar vacío`,
                icon: 'warning',
                color: textColor,
                background: bgColor
            })
            return;
        }

        try {
            await service.update(editDinosaurio.id, model);
            Swal.fire({
                title: 'Actualizado',
                text: 'Dinosaurio actualizado correctamente',
                icon: 'success',
                color: textColor,
                background: bgColor
            });
            getDinosaurio(); // recargar lista
            setShowEdit(false);
            setEditDinosaurio(null);
            setNombre('');
            setEspecie('');
            setTipo('');
            setEra('');
            setAlimentacion('');
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: 'Error',
                text: 'No se pudo actualizar el dinosaurio',
                icon: 'error',
                color: textColor,
                background: bgColor
            });
        }
    }

    //=================================================================================================================================================================================================
    //                                                                                          ELIMINAR REGISTROS
    //=================================================================================================================================================================================================
    const handleDelete = async (id: string) => {
        const textColor = textbotonbgbody === 'dark' ? '#FFFFFF' : '#000000';
        const bgColor = botonbgbody === 'dark' ? '#333333' : '#FFFFFF';

        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Este registro se eliminará',
            icon: 'warning',
            color: textColor,
            background: bgColor,
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await service.delete(id);
                Swal.fire({
                    title: 'Eliminado',
                    text: 'Dinosaurio eliminado correctamente',
                    icon: 'success',
                    color: textColor,
                    background: bgColor,
                });
                getDinosaurio();
            }
        });
    };

    //=================================================================================================================================================================================================
    //                                                                                          CAMBIAR FONDO
    //=================================================================================================================================================================================================
    const { botonBg, textBotonBg, botonBgBody, textBotonBgBody } = useTheme();

    const boton = botonBg;
    const textboton = textBotonBg;
    const botonbgbody = botonBgBody;
    const textbotonbgbody = textBotonBgBody;

    return (<>
        <span className={`${textboton}`}></span><span className={`${boton}`}></span>{/*Esto no hace nada*/}
        <div className={`bg-${botonbgbody}`} style={{transition: "1s"}}>
            <Container data-bs-theme={`${botonbgbody}`} style={{transition: "1s"}}>
                <br />
                <Row>
                    <Col>
                        <h1 className={`${textbotonbgbody}`}>Control de Dinosaurios</h1>
                    </Col>

                    <Col className="d-flex justify-content-end">
                        {
                            botonBgBody==='light'
                                ? <Button onClick={handleShowInsert} className={`border border-${boton}`} style={{background: "transparent", color: "black"}}>Registrar</Button>
                                : <Button onClick={handleShowInsert} className={`border border-${boton}`} style={{background: "transparent", color: "white"}}>Registrar</Button>
                        }
                        
                    </Col>
                </Row>

                {
                    //=================================================================================================================================================================================
                    //                                                                      FORMULARIO DE INSERCCIÓN DE REGISTROS
                    //=================================================================================================================================================================================
                }
                <Modal data-bs-theme={`${botonbgbody}`} show={showInsert} onHide={handleCloseInsert} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title><i className="bi bi-plus"></i>Añadir Dinosaurios</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={añadirDinosaurio}>
                            <Row>
                                <Form.Group className="col-6">
                                    <Form.Label className="label">Nombre</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese el nombre" name="nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)}></Form.Control>
                                </Form.Group>

                                <Form.Group className="col-6">
                                    <Form.Label className="label">Especie</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese la especie" name="especie" required value={especie} onChange={(e) => setEspecie(e.target.value)}></Form.Control>
                                </Form.Group>
                            </Row>
                            <br />
                            <Row>
                                <Form.Group className="col-6">
                                    <Form.Label className="label">Tipo</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese el tipo" name="tipo" required value={tipo} onChange={(e) => setTipo(e.target.value)}></Form.Control>
                                </Form.Group>

                                <Form.Group className="col-6">
                                    <Form.Label className="label">Era</Form.Label>
                                    <Form.Select name="era" required value={era} onChange={(e) => setEra(e.target.value)}>
                                        <option value="">Seleccione la Era</option>
                                        <option value="Triásico">Triásico</option>
                                        <option value="Jurásico">Jurásico</option>
                                        <option value="Cretácico">Cretácico</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <br />
                            <Row>
                                <Form.Group className="col-6">
                                    <Form.Label className="label">Alimentación</Form.Label>
                                    <Form.Select name="alimentacion" required value={alimentacion} onChange={(e) => setAlimentacion(e.target.value)}>
                                        <option value="">Seleccione la alimentación</option>
                                        <option value="Carne">Carne</option>
                                        <option value="Plantas">Plantas</option>
                                        <option value="Peces">Peces</option>
                                        <option value="Todo">Todo</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseInsert}>Cerrar</Button>

                        <Form onSubmit={añadirDinosaurio}>
                            <Button variant="primary" type="submit">Añadir</Button>
                        </Form>
                    </Modal.Footer>
                </Modal>

                <br />

                {
                    //=================================================================================================================================================================================
                    //                                                                                TABLA DE LOS REGISTROS
                    //=================================================================================================================================================================================
                }
                <Container className="text-center" style={{transition: "1s"}}>
                    {DinosaurioList.length == 0
                        ? <p>Sin datos</p>
                        : <Table className="border" striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Especie</th>
                                    <th>Tipo</th>
                                    <th>Era</th>
                                    <th>Alimentación</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {DinosaurioList.map((dino) => (
                                    <tr key={dino.id}>
                                        <td>{dino.id}</td>
                                        <td>{dino.nombre}</td>
                                        <td>{dino.especie}</td>
                                        <td>{dino.tipo}</td>
                                        <td>{dino.era}</td>
                                        <td>{dino.alimentacion}</td>
                                        <td>
                                            <Button onClick={() => handleShowEdit(dino)} type="submit"><i className="bi bi-pencil-square"></i></Button>&nbsp;
                                            <Button onClick={() => handleDelete(dino.id!)} variant="danger"><i className="bi bi-trash-fill"></i></Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    }

                    {
                        //=================================================================================================================================================================================
                        //                                                                      FORMULARIO DE ACTUALIZACIÓN DE REGISTROS
                        //=================================================================================================================================================================================
                    }
                    <Modal data-bs-theme={`${botonbgbody}`} show={showEdit} onHide={handleCloseEdit} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Actualizar Dinosaurios</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form onSubmit={actualizarDinosaurio}>
                                <Row>
                                    <Form.Group className="col-6">
                                        <Form.Label className="label">Nombre</Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese el nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></Form.Control>
                                    </Form.Group>

                                    <Form.Group className="col-6">
                                        <Form.Label className="label">Especie</Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese la especie" name="especie" value={especie} onChange={(e) => setEspecie(e.target.value)}></Form.Control>
                                    </Form.Group>
                                </Row>
                                <br />
                                <Row>
                                    <Form.Group className="col-6">
                                        <Form.Label className="label">Tipo</Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese el tipo" name="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}></Form.Control>
                                    </Form.Group>

                                    <Form.Group className="col-6">
                                        <Form.Label className="label">Era</Form.Label>
                                        <Form.Select name="era" value={era} onChange={(e) => setEra(e.target.value)}>
                                            <option value="">Seleccione la Era</option>
                                            <option value="Triásico">Triásico</option>
                                            <option value="Jurásico">Jurásico</option>
                                            <option value="Cretácico">Cretácico</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <br />
                                <Row>
                                    <Form.Group className="col-6">
                                        <Form.Label className="label">Alimentación</Form.Label>
                                        <Form.Select name="alimentacion" value={alimentacion} onChange={(e) => setAlimentacion(e.target.value)}>
                                            <option value="">Seleccione la alimentación</option>
                                            <option value="Carne">Carne</option>
                                            <option value="Plantas">Plantas</option>
                                            <option value="Peces">Peces</option>
                                            <option value="Todo">Todo</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                            </Form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseEdit}>Cerrar</Button>

                            <Form onSubmit={actualizarDinosaurio}>
                                <Button variant="primary" type="submit">Actualizar</Button>
                            </Form>

                        </Modal.Footer>
                    </Modal>
                </Container>
            </Container>
        </div>
    </>)
}