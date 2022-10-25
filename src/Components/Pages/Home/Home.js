import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import FormRange from 'react-bootstrap/esm/FormRange'
import Form from 'react-bootstrap/Form'
import Timer from '../Timer/Timer'

function Home() {
    const [ciclos, setCiclos] = useState(5)
    const [concentracion, setConcentracion] = useState(20)
    const [descanso, setDescanso] = useState(5)

    const handleCiclos = (e) => {
        setCiclos(e.target.value)
    }

    const handleConcentracion = (e) => {
        setConcentracion(e.target.value)
    }

    const handleDescanso = (e) => {
        setDescanso(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <Container className='bg-light border border-primary
            rounded d-flex justify-content-center
            align-items-center mt-5'>
                <Form className='m-4 text-primary'>
                    <Form.Label>Numero de ciclos</Form.Label>
                    <FormRange id='ciclosRange'
                        onChange={handleCiclos}
                        min='1'
                        max='10'
                        defaultValue='5'

                    />
                    <p>{ciclos} ciclos</p>
                    <Form.Label>Tiempo de concentracion</Form.Label>
                    <FormRange id='concentracionRange'
                        onChange={handleConcentracion}
                        min='20'
                        max='60'
                        step='5'
                        defaultValue='20'

                    />
                    <p>{concentracion} minutos</p>
                    <Form.Label>Tiempo de descanso</Form.Label>
                    <FormRange

                        id='DescansoRange'
                        onChange={handleDescanso}
                        min='5' max='20'
                        defaultValue='5'

                    />
                    <p>{descanso} minutos</p>
                    <Button onClick={handleClick}>Empezar!</Button>
                </Form>
            </Container>
            <Timer
                ciclos={ciclos}
                concentracion={concentracion}
                descanso={descanso}
            />
        </>
    )
}

export default Home