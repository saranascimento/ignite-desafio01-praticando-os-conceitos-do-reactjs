import { TaskCreated } from "./TaskCreated.js";
import clipboard from "../assets/clipboard.svg";
import styles from "./TasksCreated.module.css";

interface Tasks {
  content: string;
  id: string;
}

interface TasksCreatedProps {
  tasks: Tasks[];
  onDeleteTask: (taskToDelete: Tasks) => void;
  numberOfCreatedTasks: number;
  isCreatedTasksEmpty: boolean;
}

export function TasksCreated({
  tasks,
  onDeleteTask,
  numberOfCreatedTasks,
  isCreatedTasksEmpty,
}: TasksCreatedProps) {
  return (
    <article className={styles.tasksCreatedWrapper}>
      <header className={styles.header}>
        <strong className={styles.createdTasks}>
          Tarefas criadas <span>{numberOfCreatedTasks}</span>{" "}
        </strong>
        <strong className={styles.completedTasks}>
          Concluídas <span>5 de {numberOfCreatedTasks}</span>{" "}
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
                  key={task.id}
                  onDeleteTask={onDeleteTask}
                />
              );
            })}
          </div>
        )}
      </footer>
    </article>
  );
}
