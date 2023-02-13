import { Trash } from "phosphor-react";

import styles from "./TaskCreated.module.css";

interface Tasks {
  content: string;
  id: string;
}
interface TaskCreatedProps {
  task: Tasks;
  onDeleteTask: (taskToDelete: Tasks) => void;
}

export function TaskCreated({ task, onDeleteTask }: TaskCreatedProps) {
  function handleDeleteTask() {
    onDeleteTask(task);
  }

  return (
    <div className={styles.taskCreated}>
      <div className={styles.content}>
        <input type="checkbox" name="done" className={styles.checkbox}></input>
        <p>{task.content}</p>
      </div>
      <button title="Deletar comentário" onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}
