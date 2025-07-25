import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav style={{ padding: 10, backgroundColor: '#eee', marginBottom: 20 }}>
      <Link to="/" style={{ marginRight: 10 }}>Veículos</Link>
      <Link to="/novo" style={{ marginRight: 10 }}>Novo Veículo</Link>
      <Link to="/estatisticas">Estatísticas</Link>
    </nav>
  );
}
