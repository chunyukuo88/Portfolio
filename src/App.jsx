import { BrowserRouter as Router, Routes, Route, useNavigate  } from 'react-router-dom';
import './App.css';
import { Counter } from './features/counter/Counter.jsx';
import { store } from './globalState/store.js';
import {Provider, useSelector} from 'react-redux'
import Language from './features/language/Language';
import strings from "./common/strings.js";

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path={'/'} element={<Home />}/>
            <Route exact path={'/counter'} element={<CounterPage />}/>
          </Routes>
        </Router>
      </Provider>
    </div>
  )
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

function Home(){
  const navigate = useNavigate();
  const language = useSelector((state) => state.language.value);
  const goToCounter = () => navigate('/counter');
  return (
    <>
      <button onClick={goToCounter}>{strings.goToCounter[language]}</button>
      <div>
        {strings.homeGreeting[language]}
      </div>
    </>
  );
}

export default App;
