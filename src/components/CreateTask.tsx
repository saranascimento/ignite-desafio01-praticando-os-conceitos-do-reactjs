import styles from "./CreateTask.module.css";
import plusIcon from "../assets/plus.svg";

export function CreateTask() {
  return (
    <div className={styles.createTaskWrapper}>
      <input
        className={styles.createTaskInput}
        type="text"
        name=""
        id=""
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.createTaskButton}>
        Criar{" "}
        <img
          src={plusIcon}
          alt="Ícone de adição com borda redonda e um símbolo interno de +"
        />
      </button>
    </div>
  );
}
