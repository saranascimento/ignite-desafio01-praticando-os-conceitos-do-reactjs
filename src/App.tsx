import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import { TasksCreated } from "./components/TasksCreated";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <CreateTask />
        <TasksCreated />
      </main>
    </>
  );
}

export default App;
