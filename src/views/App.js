import logo from './logo.svg';
import './App.scss';
import MyComponent from './Exemple/MyComponent';
// function App(): là function component (Function Declaration)
// có thể viết như function expression:
/*
const App = () => {...}
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent/>
      </header>
    </div>
  );
}

export default App;
