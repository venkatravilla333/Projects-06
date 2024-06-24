import './App.css';
import logo from './Components/logo-999.png'
import Header from './Components/Header';
import HomeScreen from './Screens/HomeScreen';
import Footer from './Components/Footer';
import {Routes, Route} from 'react-router-dom'
import ProductDescriptionScreen from './Screens/ProductDescriptionScreen';
import { store } from './Redux/store';
import {Provider} from 'react-redux'

function App() {

  return (
    <div className='App'>
      <Provider store={store}>
        <Header />
        <main className='main'>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route
              path='/products/:id'
              element={<ProductDescriptionScreen />}
            />
          </Routes>
        </main>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
