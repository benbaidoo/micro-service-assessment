import './App.css';
import Api from './Components/Api';
import config from './config';

function App() {
  return (
    <div className="App">
      <h2>Welcome</h2>
      {config.api && config.api.map((fw, index) =>
        (<Api key={index} {...fw} />))
      }
      <div id='backend-output'></div>
    </div>
  );
}

export default App;
