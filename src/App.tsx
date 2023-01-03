import { Component, createSignal } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  const [b, setB] = createSignal(6);
  const addNum = () => {
    setB((prev) => prev + 1);
  };
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          {b}
        </p>
        <button onClick={() => setB((prev) => prev + 1)}>test</button>
      </header>
    </div>
  );
};

export default App;
