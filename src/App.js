import Landing from './pages/Landing';
import { Route,Routes } from 'react-router-dom';
import About from './pages/About';
import Donate from './pages/Donate';
import SuccessPayment from './pages/SuccessPayment';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/donate' element={<Donate/>}></Route>
      <Route path='/paymentsuccessful' element={<SuccessPayment/>}></Route>
    </Routes>    
  );
}

export default App;
