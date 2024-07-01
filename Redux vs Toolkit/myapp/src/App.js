import './App.css';
import CakeComponent from './components/CakeComponent';
import CountComponent from './components/CountComponent';
import UserComponent from './components/UserComponent';
// import { store } from './Redux/store';
import { store } from './Toolkit/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeComponent />
        <CountComponent />
        <UserComponent/>
      </Provider>
    </div>
  );
}

export default App;
