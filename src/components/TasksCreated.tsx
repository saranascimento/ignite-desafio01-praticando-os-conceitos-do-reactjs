import { TaskCreated } from "./TaskCreated.js";
import clipboard from "../assets/clipboard.svg";
import styles from "./TasksCreated.module.css";

interface Tasks {
  content: string;
  id: string;
  isFinished: boolean;
}

interface TasksCreatedProps {
  tasks: Tasks[];
  onDeleteTask: (taskToDelete: Tasks) => void;
  onCompleteTask: (taskToFinish: Tasks) => void;
  numberOfCompletedtasks: number;
}

export function TasksCreated({
  tasks,
  onDeleteTask,
  onCompleteTask,
  numberOfCompletedtasks,
}: TasksCreatedProps) {
  const isCreatedTasksEmpty = tasks.length === 0;
  const numberOfCreatedTasks = tasks.length;

  return (
    <article className={styles.tasksCreatedWrapper}>
      <header className={styles.header}>
        <strong className={styles.createdTasks}>
          Tarefas criadas <span>{numberOfCreatedTasks}</span>{" "}
        </strong>
        <strong className={styles.completedTasks}>
          Concluídas{" "}
          <span>
            {numberOfCompletedtasks} de {numberOfCreatedTasks}
          </span>{" "}
        </strong>
      </header>
      <footer>
        {isCreatedTasksEmpty ? (
          <div className={styles.contentEmpty}>
            <img src={clipboard} alt="" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <div className={styles.todoList}>
            {tasks.map((task) => {
              return (
                <TaskCreated
                  task={task}
                  isFinished={task.isFinished}
                  key={task.id}
                  onDeleteTask={onDeleteTask}
                  onCompleteTask={onCompleteTask}
                />
              );
            })}
          </div>
        )}
      </footer>
    </article>
  );
}
