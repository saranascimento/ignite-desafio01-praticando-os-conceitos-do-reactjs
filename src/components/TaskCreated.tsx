import React from "react";
import { Trash } from "phosphor-react";

import styles from "./TaskCreated.module.css";

interface TaskCreatedProps {
  content: string;
}

export function TaskCreated({ content }: TaskCreatedProps) {
  return (
    <div className={styles.taskCreated}>
      <input type="checkbox" name="done" className={styles.checkbox}></input>
      <p>{content}</p>
      <button title="Deletar comentário">
        <Trash size={24} />
      </button>
    </div>
  );
}
