import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../HomePage/HomePage';
import { Destination } from '../Destination/Destination';
import { Header } from '../Header/Header';
import { Crew } from '../Crew/Crew';
import { Tech } from '../Tech/Tech';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/destination" element={<Navigate replace to="/destination/moon" />}/>
        <Route path="/destination/:planetname" element={<Destination />}/>
        <Route path="/crew" element={<Navigate replace to="/crew/commander" />}/>
        <Route path="/crew/:crewjob" element={<Crew />}/>
        <Route path="/tech" element={<Navigate replace to="/tech/vehicle" />}/>
        <Route path="/tech/:recenttech" element={<Tech />}/>
      </Routes>
    </Router>
  );
}

export default App;
