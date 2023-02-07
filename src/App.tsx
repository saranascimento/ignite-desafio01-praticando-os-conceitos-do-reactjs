import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <CreateTask />
      </main>
    </>
  );
}

export default App;
