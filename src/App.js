import Landing from './pages/Landing';
import { Route,Routes } from 'react-router-dom';
import About from './pages/About';
import Donate from './pages/Donate';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/donate' element={<Donate/>}></Route>
    </Routes>    
  );
}

export default App;
