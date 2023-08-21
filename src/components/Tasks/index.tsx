import * as C from "./styles"
import { BsFillCheckCircleFill } from "react-icons/bs"

import Trash from "../../assets/trash.svg"
import { TaskItemType } from "../../Todo";

interface Props {
  tasks: TaskItemType[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export const Tasks = ({ tasks, onDelete, onComplete }: Props) => {
  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter((task) => task.isCompleted).length

  return (
    <C.Container>

      <C.InfoItems>
        <div className="info-container">
          <div className="created-tasks">
            Tarefas criadas <span>{tasksQuantity}</span>
          </div>
          <div className="created-tasks">
            Concluídas <span>{completedTasks} de {tasksQuantity}</span>
          </div>
        </div>
      </C.InfoItems>

      

      {tasks.map((task) => (
        <C.TaskItem key={task.id}>
          <C.CustomButton onClick={() => onComplete(task.id)}>
            {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
          </C.CustomButton>

          <p className={task.isCompleted ? "textCompleted" : ""}>
            {task.title}
          </p>

          <button className="img-button" onClick={() => onDelete(task.id)}>
            <img src={Trash} alt="Lixeira" />
          </button>
        </C.TaskItem>
      ))}
     
    </C.Container>
  );
};