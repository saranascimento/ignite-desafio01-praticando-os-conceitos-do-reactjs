import { useState, FormEvent, ChangeEvent } from "react";

import plusIcon from "../assets/plus.svg";

import styles from "./CreateTask.module.css";
import { TasksCreated } from "./TasksCreated";

export function CreateTask() {
  const [tasks, setTasks] = useState(["test"]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    // setTask([...task, newTaskText]);
    setTasks([...tasks, newTaskText]);
    setNewTaskText("");

    console.log(tasks);
  }

  function handleNewTaskCreatedChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");

    setNewTaskText(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.createTaskWrapper}>
        <input
          className={styles.createTaskInput}
          type="text"
          name="task"
          id=""
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskCreatedChange}
          value={newTaskText}
        />
        <button className={styles.createTaskButton}>
          Criar{" "}
          <img
            src={plusIcon}
            alt="Ícone de adição com borda redonda e um símbolo interno de +"
          />
        </button>
      </form>

      <TasksCreated tasks={tasks} />
    </>
  );
}
