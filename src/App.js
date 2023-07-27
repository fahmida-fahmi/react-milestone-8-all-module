import './App.css';
import Countries from './Components/Countries/Countries';
import Country from './Components/Country/Country';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <h2>Welcome to my react website which is saying about rest countries</h2>
      {/* <Header></Header> */}
      <Countries></Countries>
      {/* <Country></Country> */}
    </div>
  );
}


export default App;
