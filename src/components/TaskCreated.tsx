import React from "react";
import { Trash } from "phosphor-react";

import styles from "./TaskCreated.module.css";

interface Content {
  content: string;
  onDeleteTask: (task: string) => void;
}

export function TaskCreated({ content, onDeleteTask }: Content) {
  function handleDeleteTask() {
    // onDeleteTask(content);
    console.log("deletar");

    onDeleteTask(content);
  }

  return (
    <div className={styles.taskCreated}>
      <input type="checkbox" name="done" className={styles.checkbox}></input>
      <p>{content}</p>
      <button title="Deletar comentário" onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}
