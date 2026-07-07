import { useState } from 'react'
import './App.css'

function Saudacao({ nome }) {
    return <h2>Olá {nome}, seja bem-vindo!</h2>;
}

function Contador() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>

            <button onClick={() => setCount(count - 1)}>
                Decrementar
            </button>
            <button onClick={() => setCount(count + 1)}>
                Incrementar
            </button>
        </div>
    );
}

function Tarefas() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Aprender sobre Props", done: true },
        { id: 2, text: "Entender useState", done: false },
        { id: 3, text:" Estudar Web Components", done: false }
    ]);

    // TODO: adicionar, editar e remover tarefas
    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <p>{task.text}</p>
                        <p>{task.done}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function App() {

    return (
        <div>
            <Saudacao nome="Liz" />
            <Tarefas />
        </div>
    )
}

export default App
