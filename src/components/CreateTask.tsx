import { useState, FormEvent, ChangeEvent } from "react";

import plusIcon from "../assets/plus.svg";

import styles from "./CreateTask.module.css";
import { TasksCreated } from "./TasksCreated";

export function CreateTask() {
  const [tasks, setTasks] = useState(["test"]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTaskText]);
    setNewTaskText("");
  }

  function handleNewTaskCreatedChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");

    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.setCustomValidity("Esse campo é obrigatório"));
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  const isNewTaskEmpty = newTaskText.length === 0;

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
          required
          onInvalid={handleNewTaskInvalid}
        />
        <button className={styles.createTaskButton} disabled={isNewTaskEmpty}>
          Criar{" "}
          <img
            src={plusIcon}
            alt="Ícone de adição com borda redonda e um símbolo interno de +"
          />
        </button>
      </form>

      <TasksCreated tasks={tasks} onDeleteTask={deleteTask} />
    </>
  );
}
