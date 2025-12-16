import Container from 'react-bootstrap/Container';
import dino from '../assets/imagenes/dino.jpg';


export default function Pagina404Comp() {
    return (<>
        <Container className='d-flex justify-content-center align-items-center'>
            <img className='img-fluid' src={dino} alt="Imagen de dinosaurio pensando" />
        </Container>
    </>)
}