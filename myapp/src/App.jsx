import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom'; // Import Outlet

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Outlet /> {/* Outlet for rendering child routes */}
      <Footer />
    </div>
  );
}

export default App;
