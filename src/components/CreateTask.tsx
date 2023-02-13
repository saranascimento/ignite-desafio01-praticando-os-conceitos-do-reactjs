import { useState, FormEvent, ChangeEvent } from "react";

import { v4 as uuidv4 } from "uuid";

import plusIcon from "../assets/plus.svg";

import styles from "./CreateTask.module.css";
import { TasksCreated } from "./TasksCreated";

interface Tasks {
  content: string;
  id: string;
}

export function CreateTask() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, { id: uuidv4(), content: newTaskText }]);
    setNewTaskText("");
  }

  function handleNewTaskCreatedChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");

    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function deleteTask(taskToDelete: Tasks) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete.id;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  const isNewTaskEmpty = newTaskText.length === 0;
  const isCreatedTasksEmpty = tasks.length === 0;
  const numberOfCreatedTasks = tasks.length;

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
      <TasksCreated
        tasks={tasks}
        numberOfCreatedTasks={numberOfCreatedTasks}
        isCreatedTasksEmpty={isCreatedTasksEmpty}
        onDeleteTask={deleteTask}
      />
    </>
  );
}
