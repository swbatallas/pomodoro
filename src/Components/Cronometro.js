import React, { useEffect, useState } from 'react'
import { Button, Container, Modal } from 'react-bootstrap'

function Cronometro(props) {
    const { segundos, setSegundos, minutos, setMinutos, setDescansoActivo, DescansoActivo } = props
    const [estaPausado, setEstaPausado] = useState(true)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        setEstaPausado(false)
    };
    const [botonPausa,setBotonPausa] = useState("Pausar")
    useEffect(() => {
        if (estaPausado === false) {
            setBotonPausa("Pausar")
            if (segundos !== 0) setTimeout(() => setSegundos(segundos - 1), 1000)
            else if (segundos === 0 && minutos !== 0) setTimeout(() => {
                setMinutos(minutos - 1)
                setSegundos(59)
            }, 1000)
            else setDescansoActivo(!DescansoActivo)
        }
        else setBotonPausa("Continuar")
    }, [minutos, segundos, estaPausado, setMinutos, setSegundos, DescansoActivo, setDescansoActivo])

    return (
        <>
            <Container className='d-flex justify-content-center align-items-center'>
                <Button size="lg"
                    variant="primary"
                    onClick={handleShow}
                >
                    empezar
                </Button>
            </Container>
            <Modal
                show={show} onHide={handleClose}
                backdrop="static" keyboard={false} centered
            >
                <Modal.Body>
                    <h1 className='text-center py-3'>{minutos} : {segundos}</h1>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-center align-items-center'>
                    <Button size="sm"
                        variant="primary"
                        onClick={() => setEstaPausado(!estaPausado)}
                    >
                        {botonPausa}
                    </Button>
                    <Button
                        size="sm"
                        variant="secondary"
                        onClick={handleClose}
                        disabled={!estaPausado}
                    >
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Cronometro