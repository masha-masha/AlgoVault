import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlgoDetail from './components/AlgoDetail';
import AlgorithmMenu from './components/AlgoMenu';


function App() {
  return (
    <Router>
      <div className="app-container">
        <AlgorithmMenu/>
        
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
