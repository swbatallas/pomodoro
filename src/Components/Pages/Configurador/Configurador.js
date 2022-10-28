import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import FormRange from 'react-bootstrap/esm/FormRange'
import Form from 'react-bootstrap/Form'
import Timer from '../Timer/Timer'

function Configurador(props) {
    const [ciclos, setCiclos] = useState()
    const [tiempoConcentracion, settiempoConcentracion] = useState()
    const [tiempoDescanso, setTiempoDescanso] = useState()

    useEffect(() => {

    }, [])
    const handleCiclos = (e) => {
        setCiclos(e.target.value)
    }

    const handleConcentracion = (e) => {
        settiempoConcentracion(e.target.value)
    }

    const handleDescanso = (e) => {
        setTiempoDescanso(e.target.value)
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
                    <p>{tiempoConcentracion} minutos</p>
                    <Form.Label>Tiempo de descanso</Form.Label>
                    <FormRange

                        id='descansoRange'
                        onChange={handleDescanso}
                        min='5' max='20'
                        defaultValue='5'

                    />
                    <p>{tiempoDescanso} minutos</p>
                </Form>
            </Container>
            <Timer
                setCiclos={setCiclos}
                ciclos={ciclos}
                tiempoConcentracion={tiempoConcentracion}
                tiempoDescanso={tiempoDescanso}
                key={[tiempoConcentracion, tiempoDescanso]}
            />
        </>
    )
}

export default Configurador