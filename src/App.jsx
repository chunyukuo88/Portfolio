import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import './App.css';
import { Counter } from './features/counter/Counter.jsx';
import { store } from './globalState/store.js';
import { Provider } from 'react-redux'
import Language from './features/language/Language';

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
  return (
    <>
      <Language />
      <Counter/>
    </>
  );
}

function Home(){
  return (
    <div>
      HELLO THIS IS HOMEPAGE , wlecome to inteweb
    </div>
  );
}

export default App;
