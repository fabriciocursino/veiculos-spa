import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import VeiculoList from './components/VeiculoList';
import VeiculoDetalhe from './components/VeiculoDetalhe';
import VeiculoForm from './components/VeiculoForm';
import Estatisticas from './components/Estatisticas';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<VeiculoList />} />
          <Route path="/veiculos/:id" element={<VeiculoDetalhe />} />
          <Route path="/novo" element={<VeiculoForm />} />
          <Route path="/editar/:id" element={<VeiculoForm editar />} />
          <Route path="/estatisticas" element={<Estatisticas />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
