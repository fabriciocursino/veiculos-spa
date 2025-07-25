import { useState, useEffect } from 'react';
import { buscarVeiculos, excluirVeiculo } from '../api/veiculos';
import { Link, useNavigate } from 'react-router-dom';

export default function VeiculoList() {
  const [veiculos, setVeiculos] = useState([]);
  const [marca, setMarca] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');
  const navigate = useNavigate();

  const carregarVeiculos = () => {
    buscarVeiculos({
      marca: marca || undefined,
      ano: ano ? Number(ano) : undefined,
      cor: cor || undefined,
    }).then(res => setVeiculos(res.data));
  };

  useEffect(() => {
    carregarVeiculos();
  }, []);

  const handleExcluir = (id) => {
    if (window.confirm('Confirma exclusão do veículo?')) {
      excluirVeiculo(id).then(() => carregarVeiculos());
    }
  };

  const handleBuscar = (e) => {
    e.preventDefault();
    carregarVeiculos();
  };

  return (
    <div>
      <h2>Veículos</h2>

      <form onSubmit={handleBuscar} style={{ marginBottom: 20 }}>
        <input placeholder="Marca" value={marca} onChange={e => setMarca(e.target.value)} />
        <input type="number" placeholder="Ano" value={ano} onChange={e => setAno(e.target.value)} />
        <input placeholder="Cor" value={cor} onChange={e => setCor(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>

      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Marca</th>
            <th>Ano</th>
            <th>Cor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map(v => (
            <tr key={v.id}>
              <td>{v.marca}</td>
              <td>{v.ano}</td>
              <td>{v.cor}</td>
              <td>
                <button onClick={() => navigate(`/veiculos/${v.id}`)}>Ver</button>{' '}
                <button onClick={() => navigate(`/editar/${v.id}`)}>Editar</button>{' '}
                <button onClick={() => handleExcluir(v.id)}>Excluir</button>
              </td>
            </tr>
          ))}
          {veiculos.length === 0 && (
            <tr>
              <td colSpan="4">Nenhum veículo encontrado</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
