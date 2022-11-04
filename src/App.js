
import React, { useEffect, useState } from 'react'
import Configurador from './Components/EstablecerCiclos';
import Cronometro from './Components/Cronometro';
import { Container } from 'react-bootstrap';

function App() {

  const [ciclos, setCiclos] = useState(5)
  const [tiempoConcentracion, setTiempoConcentracion] = useState(20)
  const [tiempoDescanso, setTiempoDescanso] = useState(5)
  const [descansoActivo, setDescansoActivo] = useState(false)

  const [minutos, setMinutos] = useState()
  const [segundos, setSegundos] = useState(5)

  useEffect(() => {
    setMinutos(tiempoConcentracion)
  }, [tiempoConcentracion])

  useEffect(() => {
    if (ciclos !== 0) {
      if (descansoActivo && minutos === 0) {
        setMinutos(tiempoDescanso)
      }
      else if (!descansoActivo && minutos === 0) {
        setMinutos(tiempoConcentracion)
      }
    }
  }, [ciclos, minutos, descansoActivo, tiempoConcentracion, tiempoDescanso])

  return (
    <Container className='d-flex flex-column justify-content-center align-items-center my-5 w-75'>
      <Configurador
        ciclos={ciclos}
        setCiclos={setCiclos}
        tiempoConcentracion={tiempoConcentracion}
        setTiempoConcentracion={setTiempoConcentracion}
        tiempoDescanso={tiempoDescanso}
        setTiempoDescanso={setTiempoDescanso}
      />
      <Cronometro
        ciclos={ciclos}
        minutos={minutos}
        segundos={segundos}
        descansoActivo={descansoActivo}
        setMinutos={setMinutos}
        setSegundos={setSegundos}
        setDescansoActivo={setDescansoActivo}
      />
    </Container>
  );
}

export default App;
