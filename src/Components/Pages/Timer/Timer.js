import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import './Timer.css'

function Timer(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [minutos, setMinutos] = useState(props.tiempoConcentracion)
    const [segundos, setSegundos] = useState(5)
    const [descansoActivo, setDescansoActivo] = useState(false)
    console.log(props.tiempoConcentracion, props.tiempoDescanso)

    useEffect(() => {
        if (show) {
            setTimeout((props) => {
                if (segundos !== 0) { setSegundos(segundos - 1) }
                else if (segundos === 0 && minutos !== 0) {
                    setMinutos(minutos - 1)
                    setSegundos(59)
                }
                else if (minutos === 0 && descansoActivo === false) {
                    setMinutos(props.tiempoDescanso)
                    setDescansoActivo(true)
                }
                else if (minutos === 0 && descansoActivo === true) {
                    setMinutos(props.tiempoConcentracion)
                    setDescansoActivo(false)
                    props.setCiclos(props.ciclos - 1)
                }
            }, 1000);
        }
    }, [show, segundos, minutos, props.tiempoDescanso, props.tiempoConcentracion, descansoActivo])

    return (
        <>
            <Button variant="primary" className="flex justify-content-center align-items-center" onClick={handleShow}>
                Empezar!
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.ciclos} Ciclo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {minutos} : {segundos}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">Pausar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Timer