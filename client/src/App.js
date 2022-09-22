import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import About from './components/shared/about/About';
import Workers from './components/workers/Workers';
import Nomatch from './components/shared/Nomatch';

import Navbar from './components/shared/Navbar';
import Davhorne from './components/Aboutpages/davhorne/Davhorne';
import Borjakay from './components/Aboutpages/borjakay/Borjakay';
import Gregmartos from './components/Aboutpages/gregmartos/Gregmartos';

const App = () => (
<>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/workers' element={<Workers />} />
    <Route path='/*' element={<Nomatch />} />
    <Route path='/davhorne' element={<Davhorne />} />
    <Route path='/borjakay' element={<Borjakay />} />
    <Route path='/gregmartos' element={<Gregmartos />} />

    
  </Routes>
</>


)
export default App;