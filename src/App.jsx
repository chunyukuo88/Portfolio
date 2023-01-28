import './App.css';
import { Counter } from './features/counter/Counter.jsx';
import {store} from "./globalState/store.js";
import { Provider } from 'react-redux'

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Counter/>
      </Provider>
    </div>
  )
}

export default App;
