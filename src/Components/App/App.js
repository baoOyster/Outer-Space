import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '../HomePage/HomePage';
import { Header } from '../Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='' element={<HomePage />}/>
      </Routes>
    </Router>
  );
}

export default App;
