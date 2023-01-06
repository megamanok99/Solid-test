import { Component, createSignal } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { Routes, Route, useNavigate } from '@solidjs/router';
import Auth from './pages/Auth';
import PrivateRoute from './utils/PrivateRoute';

const App: Component = () => {
  const [b, setB] = createSignal(6);
  const [auth, setAuth] = createSignal(false);
  const navigate = useNavigate();

  const addNum = () => {
    setB((prev) => prev + 1);
  };
  return (
    <div class={styles.App}>
      <Routes>
        <Route path="/" component={() => <Auth setAuth={setAuth} navigate={navigate} />} />
        <Route path={auth() ? '/homepage' : '/'} component={() => <h1>homepage</h1>} />
      </Routes>
    </div>
  );
};

export default App;
