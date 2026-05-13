import { algorithms } from "../data/algoritms";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AlgorithmMenu = () => {
 const navigate = useNavigate();

 const handleRandomAlgorithm = () => {
  const randomIndex = Math.floor(Math.random() * algorithms.length);
  const randomAlgorithm = algorithms[randomIndex];
  navigate(`/algo/${randomAlgorithm.id}`); 
 };
 return (
  <aside className="sidebar">
   <h2>Алгоритмы</h2>
   <button onClick={handleRandomAlgorithm} className="random-algo-button">
    Случайный алгоритм
   </button>
   <nav>
    {algorithms.map((algo) => (
     <Link key={algo.id} to={`/algo/${algo.id}`}>
      {algo.title}
     </Link>
    ))}
   </nav>
  </aside>
 );
};

export default AlgorithmMenu;
