import { useState } from "react";

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([]);

  function handleRegister(e) {
    e.preventDefault();
    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <form onSubmit={handleRegister}>
        <label>Tarefa</label> <br />
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        /> <br />

        <button type="submit">Adicionar</button>
      </form>

      <br />

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;