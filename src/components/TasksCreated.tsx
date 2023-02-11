import { TaskCreated } from "./TaskCreated.js";
import styles from "./TasksCreated.module.css";

interface TasksCreatedProps {
  tasks: string[];
  onDeleteTask: (task: string) => void;
}

export function TasksCreated({ tasks, onDeleteTask }: TasksCreatedProps) {
  return (
    <article className={styles.tasksCreatedWrapper}>
      <header className={styles.header}>
        <strong className={styles.createdTasks}>
          Tarefas criadas <span>5</span>{" "}
        </strong>
        <strong className={styles.completedTasks}>
          Concluídas <span>2 de 5</span>{" "}
        </strong>
      </header>
      <footer>
        <div className={styles.todoList}>
          {tasks.map((task, index) => {
            return (
              <TaskCreated
                content={task}
                key={index}
                onDeleteTask={onDeleteTask}
              />
            );
          })}
        </div>
      </footer>
    </article>
  );
}
