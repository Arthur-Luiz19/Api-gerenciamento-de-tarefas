import './App.css'
import React, { useState, useEffect } from 'react';
import Tarefa from './components/tarefa';
import Titulo from './components/titulo';
import axios from 'axios';

function App() {
  // Estado para armazenar a lista de tarefas
  const [tarefas, setTarefas] = useState([]);

  // Estado para controlar o título da nova tarefa
  const [novaTarefa, setNovaTarefa] = useState('');

  // Estado para controlar o filtro das tarefas (Tudo, Concluídas, Não Concluídas)
  const [filtro, setFiltro] = useState('Tudo');

  // Estado para armazenar a descrição de uma nova tarefa
  const [descricao, setDescricao] = useState('');

  // Estado para gerenciar a tarefa atualmente em edição
  const [tarefaEditando, setTarefaEditando] = useState(null);

  // Estado para controlar o novo nome da tarefa durante a edição
  const [novoNome, setNovoNome] = useState('');

  // Função para buscar as tarefas do servidor (usando a API)
  const buscarTarefa = async () => {
    try {
      const response = await axios.get("http://localhost:3000/tarefas");
      setTarefas(response.data); // Atualiza o estado com as tarefas obtidas
    } catch (error) {
      console.log('Erro ao buscar tarefas: ', error); // Loga o erro, se houver
    }
  }

  // Função para adicionar uma nova tarefa à lista
  const adicionarTarefa = async () => {
    // Valida se o campo de nova tarefa está preenchido
    if (novaTarefa.trim() === '') return;
    try {
      await axios.post('http://localhost:3000/tarefas', {
        titulo: novaTarefa,
        descricao,
        concluida: false, // Define a tarefa como não concluída por padrão
      });
      buscarTarefa(); // Atualiza a lista de tarefas após adicionar
      setNovaTarefa(''); // Limpa o campo de entrada
      setDescricao(''); // Limpa o campo de descrição
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error); // Loga o erro, se houver
    }
  };

  // Função para filtrar as tarefas com base no estado de filtro selecionado
  const filtrarTarefas = tarefas.filter((tarefa) => {
    if (filtro === 'Concluídas') return tarefa.concluida; // Retorna apenas as concluídas
    if (filtro === 'Não concluídas') return !tarefa.concluida; // Retorna apenas as não concluídas
    return true; // Retorna todas as tarefas
  });

  // useEffect para buscar as tarefas quando o componente é montado
  useEffect(() => {
    buscarTarefa();
  }, []);

  // Contador de tarefas: total de tarefas na lista
  const totalTarefas = tarefas.length;

  // Contador de tarefas: total de tarefas concluídas
  const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida).length;

  return (
    <div>
      {/* Título principal */}
      <h1>Gerenciador de tarefas</h1>

      {/* Componente para o título da lista */}
      <Titulo texto='Lista de tarefas' />

      {/* Informações sobre a contagem de tarefas */}
      <p>
        Total de tarefas: <strong>{totalTarefas}</strong>, Total de tarefas concluídas: <strong style={{ color: 'green' }}>{tarefasConcluidas}</strong>
      </p>

      {/* Filtro para exibir diferentes estados das tarefas */}
      <div>
        <label htmlFor="filtro">Filtrar</label>
        <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
          <option value="Concluídas">Concluídas</option>
          <option value="Não concluídas">Não concluídas</option>
          <option value="Tudo">Tudo</option>
        </select>
      </div>

      {/* Lista de tarefas filtradas */}
      <ul>
        {filtrarTarefas.map((tarefa) => (
          <Tarefa
            key={tarefa.id}
            nome={tarefa.titulo}
            descricao={tarefa.descricao}
            concluida={tarefa.concluida}
          />
        ))}
      </ul>

      {/* Campo de entrada para o título de uma nova tarefa */}
      <input
        type='text'
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder='Adicionar nova tarefa'
      />

      {/* Campo de entrada para a descrição de uma nova tarefa */}
      <input
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder='Adicionar nova descrição'
      />

      {/* Botão para adicionar uma nova tarefa */}
      <button onClick={adicionarTarefa}>Adicionar</button>
    </div>
  );
}

export default App;
