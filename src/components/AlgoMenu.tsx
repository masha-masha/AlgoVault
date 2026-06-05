import { useState } from "react";
import { algorithms } from "../data/algoritms";
import { useNavigate, Link } from "react-router-dom";

const AlgorithmMenu = () => {
 const navigate = useNavigate();
 const [isOpen, setIsOpen] = useState(true);

 const handleRandomAlgorithm = () => {
  const randomIndex = Math.floor(Math.random() * algorithms.length);
  const randomAlgorithm = algorithms[randomIndex];
  navigate(`/algo/${randomAlgorithm.id}`);
 };
 const toggleMenu = () => {
  setIsOpen(!isOpen);
 };

 return (
  <aside className="sidebar">
   <div className="sidebar-header">
    <h2>
     Алгоритмы
     <button onClick={toggleMenu} className="toggle-button">
      {isOpen ? "▲" : "▼"}
     </button>
    </h2>
   </div>

   {isOpen && (
    <>
     {" "}
     <button onClick={handleRandomAlgorithm} className="random-algo-button">
      Случайный алгоритм
     </button>
     <nav>
      {algorithms.map((algo) => (
       <Link key={algo.id} to={`/algo/${algo.id}`}>
        {" "}
        {algo.title}
       </Link>
      ))}
     </nav>
    </>
   )}
  </aside>
 );
};

export default AlgorithmMenu;
