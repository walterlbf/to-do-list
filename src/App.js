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

    if (tarefa) {
      setLista([...lista, tarefa]);
      setTarefa("");
    }
  }

  function deletaTarefa(event) {

    console.log(event.target);
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
        {lista.map(item => (<li>{item} <button onClick={deletaTarefa}>deletar</button></li>))}
      </ul>
    </>
  );
}

export default App;
