import { useState, FormEvent, ChangeEvent, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import plusIcon from "../assets/plus.svg";
import usePersistedState from "../utils/usePersistedState";
import styles from "./CreateTask.module.css";
import Snackbar from "./Snackbar";
import { TasksCreated } from "./TasksCreated";

interface Tasks {
  content: string;
  id: string;
  isFinished: boolean;
}

interface Snackbar {
  type: string;
  message: string;
}

const SNACKBAR_TYPE_MESSAGE = {
  created: {
    type: "success",
    message: "Tarefa criada!",
  },
  deleted: {
    type: "info",
    message: "Tarefa deletada!",
  },
  completed: {
    type: "success",
    message: "Tarefa concluída!",
  },
};

export function CreateTask() {
  const [tasks, setTasks] = usePersistedState("tasksCreated", []);
  const [newTaskText, setNewTaskText] = useState("");
  const [numberOfCompletedtasks, setNumberOfCompletedtasks] = useState(0);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("");

  useEffect(() => {
    const completedtasks = tasks.reduce(
      (accumulator: number, { isFinished }: Tasks) => {
        return isFinished ? accumulator + 1 : accumulator;
      },
      0
    );

    setNumberOfCompletedtasks(completedtasks);
  }, [tasks]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenSnackbar(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [openSnackbar]);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([
      ...tasks,
      { id: uuidv4(), content: newTaskText, isFinished: false },
    ]);
    setNewTaskText("");
    handleOpenSnackbar(SNACKBAR_TYPE_MESSAGE.created);
  }

  function handleNewTaskCreatedChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");

    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function deleteTask(taskToDelete: Tasks) {
    const tasksWithoutDeletedOne = tasks.filter((task: any) => {
      return task.id !== taskToDelete.id;
    });

    setTasks(tasksWithoutDeletedOne);
    handleOpenSnackbar(SNACKBAR_TYPE_MESSAGE.deleted);
  }

  function completeTask(taskToComplete: Tasks) {
    const taskDone = tasks.map((task: any) =>
      task.id === taskToComplete.id
        ? { ...task, isFinished: !task.isFinished }
        : task
    );
    setTasks(taskDone);

    if (!taskToComplete.isFinished) {
      handleOpenSnackbar(SNACKBAR_TYPE_MESSAGE.completed);
    } else {
      setOpenSnackbar(() => false);
    }
  }

  function handleOpenSnackbar(typeAndMessage: Snackbar) {
    setOpenSnackbar(() => true);
    setSnackbarType(typeAndMessage.type);
    setSnackbarMessage(typeAndMessage.message);
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
          <span>Criar</span>
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

      {openSnackbar && (
        <Snackbar
          type={snackbarType}
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        >
          {snackbarMessage}
        </Snackbar>
      )}
    </>
  );
}
