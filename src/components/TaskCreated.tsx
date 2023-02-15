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
  isFinished: boolean;
}

export function TaskCreated({
  task,
  onDeleteTask,
  onCompleteTask,
  isFinished,
}: TaskCreatedProps) {
  function handleDeleteTask() {
    onDeleteTask(task);
  }

  function handleFinishTask() {
    onCompleteTask(task);
  }

  return (
    <>
      <div className={styles.taskCreated}>
        <div
          className={` ${isFinished ? styles.taskComplete : ""} ${
            styles.content
          }`}
        >
          <input
            type="checkbox"
            name="done"
            onChange={handleFinishTask}
            className={styles.checkbox}
            checked={isFinished}
          ></input>
          <p>{task.content}</p>
        </div>
        <button title="Deletar comentário" onClick={handleDeleteTask}>
          <Trash size={24} />
        </button>
      </div>
    </>
  );
}
