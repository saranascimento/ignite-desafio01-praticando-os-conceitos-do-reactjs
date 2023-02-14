import { Trash } from "phosphor-react";
import { ChangeEvent, useState } from "react";

import styles from "./TaskCreated.module.css";

interface Tasks {
  content: string;
  id: string;
  isFinished: boolean;
}
interface TaskCreatedProps {
  task: Tasks;
  onDeleteTask: (taskToDelete: Tasks) => void;
  onCompleteTask: (taskToFinish: Tasks) => void;
}

export function TaskCreated({
  task,
  onDeleteTask,
  onCompleteTask,
}: TaskCreatedProps) {
  function handleDeleteTask() {
    onDeleteTask(task);
  }

  function handleFinishTask() {
    onCompleteTask(task);
  }

  return (
    <div className={styles.taskCreated}>
      <div className={styles.content}>
        <input
          type="checkbox"
          name="done"
          onChange={handleFinishTask}
          className={styles.checkbox}
        ></input>
        <p>{task.content}</p>
      </div>
      <button title="Deletar comentário" onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}
