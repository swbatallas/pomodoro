import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import './Timer.css'

function Timer(props) {
    const [title, setTitle] = useState()
    const [cicloActual, setCicloActual] = useState(props.ciclos)
    const [concentracionActual, setConcentracionActual] = useState(props.concentracion)
    const [descansoActual, setDescanso] = useState(props.descanso)

    useEffect(() => {
        setTitle('Concentracion')
        const timer = setTimeout(() => {
            console.log('This will run after 1 min!')
            setConcentracionActual(concentracionActual - 1)
        }, 60000);
        return () => clearTimeout(timer);
    }, [concentracionActual]);

    const Mostrador = () => {

        if (concentracionActual === 0) {
            setCicloActual(cicloActual - 1)
            return <>
                <h2>{title}</h2>
                <h2>{descansoActual}</h2>
            </>
        }
        else if (cicloActual === 0) {
            return <>
                <h2>BIEN HECHO!</h2>
            </>
        }
        else {
            return (<>
                <h2>{title}</h2>
                <h2>{concentracionActual} Minutos restantes</h2>
            </>)

        }
    }

    return (<Container
        className='contador mt-5 bg-primary rounded-circle
    d-flex flex-column justify-content-center align-items-center'>
        <h1>{cicloActual} Ciclo</h1>
        <Mostrador />
    </Container>
    )
}

export default Timer