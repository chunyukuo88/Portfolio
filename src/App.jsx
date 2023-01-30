import { BrowserRouter as Router, Routes, Route, useNavigate  } from 'react-router-dom';
import { Counter } from './features/counter/Counter.jsx';
import { store } from './globalState/store.js';
import { Provider, useSelector } from 'react-redux'
import Language from './features/language/Language';
import strings from './common/strings.js';
import { Login } from './features/auth/Login.jsx';
import { routes } from './routes.js';
import { supabaseClient } from './features/auth/client.js';
import { updateAuth } from './features/auth/authSlice.js';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route exact path={routes.index} element={<HomePage />}/>
            <Route exact path={routes.counter} element={<CounterPage />}/>
            <Route exact path={routes.login} element={<LoginPage />}/>
          </Routes>
        </Router>
      </Provider>
    </div>
  )
}

function Header(){
  const navigate = useNavigate();
  const language = useSelector((state) => state.language.value);
  const auth = useSelector((state) => state.auth.value);
  const goToCounter = () => navigate(routes.counter);
  const goToLogin = () => navigate(routes.login);
  const goToHome = () => navigate(routes.index);
  const logoutHandler = async () => {
    await supabaseClient.auth.signOut();
    window.localStorage.clear();
  };
  return (
    <header>
      <Language />
      <button onClick={goToHome}>HOME</button>
      <button onClick={goToCounter}>{strings.goToCounter[language]}</button>
      {
        auth?.session?.user
          ? <button onClick={logoutHandler}>{strings.logout[language]}</button>
          : <button onClick={goToLogin}>{strings.login[language]}</button>
      }
    </header>
  );
}

function LoginPage(){
  return (
    <>
      <Login />
    </>
  );
}

function CounterPage(){
  return (
    <>
      <Counter/>
    </>
  );
}

function HomePage(){
  const language = useSelector((state) => state.language.value);
  return (
    <>
      <div>
        {strings.homeGreeting[language]}
      </div>
    </>
  );
}

export default App;
