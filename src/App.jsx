import { BrowserRouter as Router, Routes, Route, useNavigate  } from 'react-router-dom';
import { Counter } from './features/counter/Counter.jsx';
import { store } from './globalState/store.js';
import { Provider, useSelector } from 'react-redux'
import Language from './features/language/Language';
import strings from './common/strings.js';
import { Login } from './features/auth/Login.jsx';
import { routes } from './routes.js';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
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

function LoginPage(){
  const navigate = useNavigate();
  const goToHome = () => navigate(routes.index);
  return (
    <>
      <button onClick={goToHome}>HOME</button>
      <Login />
    </>
  );
}

function CounterPage(){
  const navigate = useNavigate();
  const goToHome = () => navigate(routes.index);
  return (
    <>
      <button onClick={goToHome}>HOME</button>
      <Language />
      <Counter/>
    </>
  );
}

function HomePage(){
  const navigate = useNavigate();
  const language = useSelector((state) => {
    console.log('state: ', state);
    return state.language.value
  });
  const auth = useSelector((state) => state.auth.value);
  console.log('HOMEPAGE - language: ', language);
  const goToCounter = () => navigate(routes.counter);
  const goToLogin = () => navigate(routes.login);
  return (
    <>
      <button onClick={goToCounter}>{strings.goToCounter[language]}</button>
      <button onClick={goToLogin}>Login</button>
      <div>
        {strings.homeGreeting[language]}
      </div>
    </>
  );
}

export default App;
