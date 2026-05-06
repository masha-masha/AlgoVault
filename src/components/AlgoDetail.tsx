import { useParams } from 'react-router-dom';
import { algorithms } from '../data/algoritms';
import CodeDisplay from './CodeDisplay';

const AlgoDetail = () => {
  const { id } = useParams();
  const algo = algorithms.find(a => a.id === id);

  if (!algo) return <h2>Алгоритм не найден</h2>;

  return (
    <div className="algo-page">
      <h1>{algo.title}</h1>
      <p className="description">{algo.description}</p>
      
      <div className="complexity-info">
        <span>Время: <code>{algo.complexity.time}</code></span>
        <span>Память: <code>{algo.complexity.space}</code></span>
      </div>

      <CodeDisplay js={algo.jsCode} ts={algo.tsCode} />
    </div>
  );
};

export default AlgoDetail;