import './index.css';
import Navbar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import EditForm from './components/EditForm';

import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/editForm" element={<EditForm />} />
        
      </Routes>
      
    </div>
  );
}

export default App;
