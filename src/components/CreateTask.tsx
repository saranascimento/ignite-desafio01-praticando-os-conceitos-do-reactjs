import { useState, FormEvent, ChangeEvent, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import plusIcon from "../assets/plus.svg";

import styles from "./CreateTask.module.css";
import { TasksCreated } from "./TasksCreated";

interface Tasks {
  content: string;
  id: string;
  isFinished: boolean;
}

export function CreateTask() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [numberOfCompletedtasks, setNumberOfCompletedtasks] = useState(0);

  useEffect(() => {
    const completedtasks = tasks.reduce((accumulator, { isFinished }) => {
      return isFinished ? accumulator + 1 : accumulator;
    }, 0);

    setNumberOfCompletedtasks(completedtasks);
  }, [tasks]);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([
      ...tasks,
      { id: uuidv4(), content: newTaskText, isFinished: false },
    ]);
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

  function completeTask(taskToComplete: Tasks) {
    const taskDone = tasks.map((task) =>
      task.id === taskToComplete.id
        ? { ...task, isFinished: !task.isFinished }
        : task
    );
    setTasks(taskDone);
  }

  const isNewTaskEmpty = newTaskText.trim().length === 0;

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
        onDeleteTask={deleteTask}
        onCompleteTask={completeTask}
        numberOfCompletedtasks={numberOfCompletedtasks}
      />
    </>
  );
}
