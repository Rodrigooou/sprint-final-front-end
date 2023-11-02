import './Header.css';
import { Link } from "react-router-dom";
import NoTransitionExample from './NoTransitionExample'; // Importe o componente do Carousel

export default function Header() {
  return (
    <header>
      <h1>
        <NoTransitionExample />
      </h1>
      <nav>
        <ul>
          <li><Link to="/" className="a">Home</Link></li>
          <li><Link to='/dados' className="a">Dados</Link></li>
          <li><Link to='/proposta' className="a">Proposta</Link></li>
          <li><Link to='/funcionamento' className="a">Funcionamento</Link></li>
          <li><Link to='/ibm' className="a">IBM</Link></li>
        </ul>
      </nav>
    </header>
  );
}
