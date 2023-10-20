import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/homepage/Homepage';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App