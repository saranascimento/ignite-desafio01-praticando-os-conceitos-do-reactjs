import styles from "./TasksCreated.module.css";

import { Trash } from "phosphor-react";

export function TasksCreated() {
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
          <input
            type="checkbox"
            name="done"
            className={styles.checkbox}
          ></input>
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
          <button title="Deletar comentário">
            <Trash size={24} />
          </button>
        </div>
      </footer>
    </article>
  );
}
