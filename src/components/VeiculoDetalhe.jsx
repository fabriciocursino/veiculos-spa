import { useEffect, useState } from 'react';
import { buscarVeiculoPorId } from '../api/veiculos';
import { useParams, useNavigate } from 'react-router-dom';

export default function VeiculoDetalhe() {
  const { id } = useParams();
  const [veiculo, setVeiculo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    buscarVeiculoPorId(id).then(res => setVeiculo(res.data));
  }, [id]);

  if (!veiculo) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Detalhes do Veículo</h2>
      <p><strong>Marca:</strong> {veiculo.marca}</p>
      <p><strong>Ano:</strong> {veiculo.ano}</p>
      <p><strong>Cor:</strong> {veiculo.cor}</p>
      <p><strong>Descrição:</strong> {veiculo.descricao}</p>
      <p><strong>Vendido:</strong> {veiculo.vendido ? 'Sim' : 'Não'}</p>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}
