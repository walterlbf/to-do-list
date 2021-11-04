import React, { useState } from 'react';

function App() {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);

  function handleChange(event) {
    const input = event.target.value;

    setTarefa(input);
  }

  function handleAdd(event) {
    event.preventDefault();

    setLista([...lista, tarefa]);
    setTarefa("");
  }


  return (
    <>
      <h1>
        To Do List
      </h1>

      <form>
        <input type="text" onChange={handleChange} value={tarefa} />
        <button type="submit" onClick={handleAdd}>Adcionar Tarefa</button>
      </form>

      <ul>
        {lista.map(item => (<li>{item}</li>))}
      </ul>
    </>
  );
}

export default App;
