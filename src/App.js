import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import { data } from './data';
import Details from './pages/Details';
import Home from './pages/Home';
import Welcome from './pages/Welcome';



function App() {
  
  const [Moviec, setMoviec] = useState(data)

  return (
    <div>
      <BrowserRouter>
      <div>
      <ul>
            <li><Link className="active" to="/">Welcome</Link></li>
            <li><Link className="active" to="/home">Movies</Link></li>
            
        </ul>
      </div>
    <Routes>
      
      <Route  path="/"  element={<Welcome />} />
      <Route  path="/Home"  element={<Home />} />
      <Route  path="/Details/:id"  element={<Details Moviec={Moviec}/>} />
        
    </Routes>
  </BrowserRouter>
      
    </div>
  );
}

export default App;
