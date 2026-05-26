import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">OctoFit Tracker</h1>
      <p className="lead">A React + Vite frontend ready for the OctoFit multi-tier tracker.</p>
      <Link to="/dashboard" className="btn btn-primary">
        View Dashboard
      </Link>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="container py-5">
      <h2>Dashboard</h2>
      <p>Backend API port: 8000</p>
      <p>MongoDB port: 27017</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
