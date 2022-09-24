import logo from './logo.svg';
import './App.css';

function App() {

  function add(numb , numb2){
    return numb+numb2;
  }
  
  return (
    <div className="App">
      <header className="App-header">
      pravin pawar
        Pratik Pawar
        {add(34,45)}
      </header>
    </div>
  );
}

export default App;
