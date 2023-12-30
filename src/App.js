import './App.css';
import Testimonio from './componentes/Testimonio';
import { shawn, sarah, emma } from './objetos/InfoTestimonio';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio persona={shawn} />
        <Testimonio persona={sarah} />
        <Testimonio persona={emma} />
      </div>
    </div>
  );
}

export default App;
