import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import PagenotFound from './pages/PagenotFound';
import Register from './pages/Auth/Register';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/policy' element={<Policy />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/*' element={<PagenotFound />}/>
      {/* <Route path='' element={<HomePage />}/> */}
    </Routes>
    
      
    </>
  );
}

export default App;
