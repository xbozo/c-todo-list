import * as C from "./styles"
import "./styles/global.css"

import Logo from "./assets/Logo.svg"
import PlusButton from "./assets/PlusButton.svg"
import ClipBoard from "./assets/Clipboard.svg"

import { Tasks } from "./components/Tasks"
import { ChangeEvent, FormEvent, useState } from "react"



export interface TaskItemType {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface AddTaskType {
  (taskTitle: string): void;
}


export const Todo = () => {
  const [tasks, setTasks] = useState<TaskItemType[]>([])
  const [title, setTitle] = useState("")


  const addTask: AddTaskType = (taskTitle) => {
    if(title.length > 0) {
      setTasks([
        ...tasks,
        {
          id: crypto.randomUUID(),
          title: taskTitle,
          isCompleted: false,
        }
      ]);
    }
  };

  const deleteTaskById = (taskId: string) => {
    const newTasks = tasks.filter( (task) => task.id !== taskId )
    setTasks(newTasks)
  }

  const toggleTaskCompletedById = (taskId: string) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task
    })
    setTasks(newTasks)
  }


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    addTask(title)
    setTitle("")
  }

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  return (
    <C.Container>
      <header className="header">
        <img src={Logo} alt="Logo" />
      </header>

      <main>
        <C.Form onSubmit={handleSubmit} >
          <input
            placeholder="Adicione uma nova tarefa"
            onChange={onChangeTitle}
            value={title}
            type="text"
          />
          <button>
            <div>
              Criar
              <img src={PlusButton} alt="Botão Plus" />
            </div>
          </button>
        </C.Form>

        {tasks.length === 0 ? (
          <C.EmptyTaskContainer>
            <div className="empty-info">
              <img src={ClipBoard} alt="Clipboard" />
              <div>Você ainda não tem tarefas cadastradas</div>
              <div>Crie tarefas e organize seus itens a fazer</div>
            </div>
          </C.EmptyTaskContainer>
        ) : (
          <div>
            <Tasks 
              tasks={tasks} 
              onDelete={deleteTaskById} 
              onComplete={toggleTaskCompletedById}
            />
          </div>
        )}
      </main>
    </C.Container>
  );
};