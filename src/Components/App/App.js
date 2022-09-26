import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../HomePage/HomePage';
import { Destination } from '../Destination/Destination';
import { Header } from '../Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/destination" element={<Navigate replace to="/destination/moon" />}/>
        <Route path="/destination/:planetname" element={<Destination />}/>
      </Routes>
    </Router>
  );
}

export default App;
