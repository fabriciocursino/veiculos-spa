import { useState, useEffect } from 'react';
import { criarVeiculo, buscarVeiculoPorId, atualizarVeiculo } from '../api/veiculos';
import { useNavigate, useParams } from 'react-router-dom';

export default function VeiculoForm({ editar = false }) {
  const { id } = useParams();
  const [marca, setMarca] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');
  const [vendido, setVendido] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (editar && id) {
      buscarVeiculoPorId(id).then(res => {
        const v = res.data;
        setMarca(v.marca);
        setAno(v.ano);
        setCor(v.cor);
        setVendido(v.vendido);
      });
    }
  }, [editar, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dados = {
      marca,
      ano: Number(ano),
      cor,
      vendido,
    };

    if (editar && id) {
      atualizarVeiculo(id, dados).then(() => navigate('/'));
    } else {
      criarVeiculo(dados).then(() => navigate('/'));
    }
  };

  return (
    <div>
      <h2>{editar ? 'Editar' : 'Novo'} Veículo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Marca: </label>
          <input value={marca} onChange={e => setMarca(e.target.value)} required />
        </div>
        <div>
          <label>Ano: </label>
          <input type="number" value={ano} onChange={e => setAno(e.target.value)} required />
        </div>
        <div>
          <label>Cor: </label>
          <input value={cor} onChange={e => setCor(e.target.value)} required />
        </div>
        <div>
          <label>Vendido: </label>
          <input
            type="checkbox"
            checked={vendido}
            onChange={e => setVendido(e.target.checked)}
          />
        </div>
        <button type="submit">{editar ? 'Atualizar' : 'Criar'}</button>
        <button type="button" onClick={() => navigate(-1)}>Cancelar</button>
      </form>
    </div>
  );
}
