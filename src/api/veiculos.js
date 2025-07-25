import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // altere para a URL correta do seu backend
});

export const buscarVeiculos = (params) => api.get('/veiculos', { params });
export const buscarVeiculoPorId = (id) => api.get(`/veiculos/${id}`);
export const criarVeiculo = (dados) => api.post('/veiculos', dados);
export const atualizarVeiculo = (id, dados) => api.put(`/veiculos/${id}`, dados);
export const atualizarVeiculoPatch = (id, dados) => api.patch(`/veiculos/${id}`, dados);
export const excluirVeiculo = (id) => api.delete(`/veiculos/${id}`);

export const contarNaoVendidos = () => api.get('/veiculos/total-nao-vendidos');
export const listarVeiculosUltimaSemana = () => api.get('/veiculos/ultima-semana');
export const contarVeiculosPorDecada = () => api.get('/veiculos/total-decada');
export const contarVeiculosPorMarca = () => api.get('/veiculos/total-marca');
