import { useEffect, useState } from 'react';
import {
  contarNaoVendidos,
  listarVeiculosUltimaSemana,
  contarVeiculosPorDecada,
  contarVeiculosPorMarca,
} from '../api/veiculos';

export default function Estatisticas() {
  const [totalNaoVendidos, setTotalNaoVendidos] = useState(0);
  const [ultimos, setUltimos] = useState([]);
  const [porDecada, setPorDecada] = useState([]);
  const [porMarca, setPorMarca] = useState([]);

  useEffect(() => {
    contarNaoVendidos().then(res => setTotalNaoVendidos(res.data));
    listarVeiculosUltimaSemana().then(res => setUltimos(res.data));
    contarVeiculosPorDecada().then(res => setPorDecada(res.data));
    contarVeiculosPorMarca().then(res => setPorMarca(res.data));
  }, []);

  return (
    <div>
      <h2>Estatísticas</h2>

      <p><strong>Total não vendidos:</strong> {totalNaoVendidos}</p>

      <h3>Veículos registrados na última semana</h3>
      <ul>
        {ultimos.map(v => (
          <li key={v.id}>{v.marca} - {v.ano} - {v.cor}</li>
        ))}
        {ultimos.length === 0 && <li>Nenhum registro</li>}
      </ul>

      <h3>Veículos por década</h3>
      <ul>
        {porDecada.map(item => (
          <li key={item.decada}>{item.decada}: {item.total}</li>
        ))}
      </ul>

      <h3>Veículos por marca</h3>
      <ul>
        {porMarca.map(item => (
          <li key={item.marca}>{item.marca}: {item.total}</li>
        ))}
      </ul>
    </div>
  );
}
