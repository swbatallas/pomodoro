import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import FormRange from 'react-bootstrap/esm/FormRange'
import Form from 'react-bootstrap/Form'

function Configurador(props) {
    const { ciclos,
        setCiclos,
        tiempoConcentracion,
        setTiempoConcentracion,
        tiempoDescanso,
        setTiempoDescanso,
    } = props

    useEffect(() => {

    })
    const handleCiclos = (e) => {
        setCiclos(e.target.value)
    }

    const handleConcentracion = (e) => {
        setTiempoConcentracion(e.target.value)
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
                        defaultValue={ciclos}
                    />
                    <p>{ciclos}</p>

                    <Form.Label>Tiempo de concentracion</Form.Label>
                    <FormRange id='concentracionRange'
                        onChange={handleConcentracion}
                        min='20'
                        max='60'
                        step='5'
                        defaultValue={tiempoConcentracion}
                    />
                    <p>{tiempoConcentracion}</p>

                    <Form.Label>Tiempo de descanso</Form.Label>
                    <FormRange
                        id='descansoRange'
                        onChange={handleDescanso}
                        min='5' max='20'
                        defaultValue={tiempoDescanso}
                    />
                    <p>{tiempoDescanso}</p>

                </Form>
            </Container>
        </>
    )
}

export default Configurador