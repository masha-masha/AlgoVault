import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { algorithms } from './data/algoritms';
import AlgoDetail from './components/AlgoDetail';


function App() {
  return (
    <Router>
      <div className="app-container">
        <aside className="sidebar">
          <h2>Алгоритмы</h2>
          <nav>
            {algorithms.map(algo => (
              <Link key={algo.id} to={`/algo/${algo.id}`}>{algo.title}</Link>
            ))}
          </nav>
        </aside>
        
        <main className="content">
          <Routes>
            <Route path="/" element={<h1>Выберите алгоритм для изучения</h1>} />
            <Route path="/algo/:id" element={<AlgoDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
