import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function Cronometro(props) {
    const { segundos, setSegundos, minutos, setMinutos, setDescansoActivo, DescansoActivo } = props
    const [estaPausado, setEstaPausado] = useState(true)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        setEstaPausado(false)
    };

    useEffect(() => {
        if (estaPausado === false) {
            if (segundos !== 0) setTimeout(() => setSegundos(segundos - 1), 1000)
            else if (segundos === 0 && minutos !== 0) setTimeout(() => {
                setMinutos(minutos - 1)
                setSegundos(59)
            }, 1000)
            else setDescansoActivo(!DescansoActivo)
        }
    }, [minutos, segundos, estaPausado, setMinutos, setSegundos, DescansoActivo, setDescansoActivo])

    return (
        <>
            <Button variant="primary" className="flex justify-content-center align-items-center" onClick={handleShow}>
                empezar
            </Button>

            <Modal
                show={show} onHide={handleClose}
                backdrop="static" keyboard={false}
            >
                <Modal.Body>
                    {minutos} : {segundos}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setEstaPausado(!estaPausado)}>Pausar</Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Cronometro