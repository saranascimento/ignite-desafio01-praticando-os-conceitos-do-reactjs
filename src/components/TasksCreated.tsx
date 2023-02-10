import { TaskCreated } from "./TaskCreated.js";
import styles from "./TasksCreated.module.css";

// const tasks = [
//   {
//     content:
//       "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
//   },
//   {
//     content:
//       "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
//   },
//   {
//     content:
//       "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
//   },
// ];

interface TasksCreatedProps {
  tasks: string[];
}

export function TasksCreated({ tasks }: TasksCreatedProps) {
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
            return <TaskCreated content={task} key={index} />;
          })}
        </div>
      </footer>
    </article>
  );
}
