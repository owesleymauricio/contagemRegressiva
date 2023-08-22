import Title from './componentes/Title';
import Counter from './componentes/Counter';

import Foto from './assets/foto.jpg'

import UseContdown from './hooks/UseContdown';

import './App.css'

function App() {

  const [day, hour, minute, second] = UseContdown("Jan 1, 2024  00:00:00")

  return (
      <div className='App' style={{backgroundImage: `url(${Foto})`}} >
        <div className="container">
          <Title title="Contagem Regressiva 2024"/>
          <div className="contagem-container">
            <Counter title="Dias" number={day}/>
            <Counter title="Horas" number={hour}/>
            <Counter title="Minutos" number={minute}/>
            <Counter title="Segundos" number={second}/>
          </div>
        </div>
      </div>
  )
}

export default App
