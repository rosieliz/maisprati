import { useState } from 'react'
import TaskItem from './TaskItem';
import Textarea from './Textarea';

function Tarefas() {
    const [isEditing, setIsEditing] = useState(false);

    const [tasks, setTasks] = useState([
        { id: 0, text: "Adicionar", done: true },
        { id: 1, text: "Editar", done: true },
        { id: 2, text: "Remover", done: true },
        { id: 3, text: "Aprender sobre Props", done: true },
        { id: 4, text: "Entender useState", done: false },
        { id: 5, text: "Estudar Web Components", done: false },
    ]);

    return (
        <div>
            <ul>
                {tasks.map(task => {
                    return (
                        <div key={task.id}>
                            <TaskItem task={task} />
                        </div>
                    );
                })}
            </ul>
            {isEditing
                ? <Textarea
                    callback={(value) => {
                        setIsEditing(!isEditing);
                        setTasks([
                            ...tasks,
                            { id: tasks.at(-1).id + 1, text: value, done: false }
                        ])
                    }}
                  />
                : <button onClick={() => setIsEditing(!isEditing)}>Adicionar tarefa</button>
            }
        </div>
    );
}

export default Tarefas;
