import './App.css';
import Header from '../src/components/Header'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DashboardHome from './pages/Dashboard';
import UsersPage from './pages/Users';
import FeaturesPage from './pages/Features';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Header></Header>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/users">Users</Link> |{" "}
          <Link to="/features">Features</Link>
        </nav>
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/features" element={<FeaturesPage />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
