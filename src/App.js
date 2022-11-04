
import React, { useEffect, useState } from 'react'
import './App.css';
import Configurador from './Components/EstablecerCiclos';
import Cronometro from './Components/Cronometro';

function App() {

  const [minutos, setMinutos] = useState(1)
  const [segundos, setSegundos] = useState(59)
  const [ciclos, setCiclos] = useState(5)
  const [tiempoConcentracion, setTiempoConcentracion] = useState(20)
  const [tiempoDescanso, setTiempoDescanso] = useState(5)
  const [descansoActivo, setDescansoActivo] = useState(false)

  useEffect(() => {
    if (ciclos !== 0) {
      descansoActivo ? setMinutos(tiempoDescanso) : setMinutos(tiempoConcentracion)
    }
    if (descansoActivo && minutos === 0 && segundos === 0) setCiclos(ciclos - 1)
  }, [ciclos, setCiclos, minutos, segundos, descansoActivo, tiempoConcentracion, tiempoDescanso])

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
