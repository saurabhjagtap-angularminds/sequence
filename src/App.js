import logo from './logo.svg';
import './App.css';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './Components/Welcome';
import Home from './Components/Home';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route exact path="/" element={<Welcome></Welcome>} />
          <Route  exact path="/Home" element={ <Home></Home>} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
