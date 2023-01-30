import { BrowserRouter as Router, Routes, Route, useNavigate  } from 'react-router-dom';
import './App.css';
import { Counter } from './features/counter/Counter.jsx';
import { store } from './globalState/store.js';
import {Provider, useSelector} from 'react-redux'
import Language from './features/language/Language';
import strings from './common/strings.js';
import {Login} from "./features/auth/Login.jsx";

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path={'/'} element={<HomePage />}/>
            <Route exact path={'/counter'} element={<CounterPage />}/>
            <Route exact path={'/login'} element={<LoginPage />}/>
          </Routes>
        </Router>
      </Provider>
    </div>
  )
}

function LoginPage(){
  const navigate = useNavigate();
  const goToHome = () => navigate('/');
  return (
    <>
      <button onClick={goToHome}>HOME</button>
      <Login />
    </>
  );
}

function CounterPage(){
  const navigate = useNavigate();
  const goToHome = () => navigate('/');
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
  const language = useSelector((state) => state.language.value);
  const goToCounter = () => navigate('/counter');
  const goToLogin = () => navigate('/login');
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
