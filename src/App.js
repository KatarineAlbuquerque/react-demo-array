import './App.css';

import mensagens from './components/Mensagens/Mensagens';
import Mensagem from './components/Mensagens/Mensagem';

const App = (props) => {
  return (
    <div className="App">
      
      <h1>Minhas Mensagens</h1>

      <Mensagem lista={mensagens}/>

    </div>
  );
}

export default App;
