import './App.css';
import logo from './Components/logo-999.png'
import Header from './Components/Header';
import HomeScreen from './Screens/HomeScreen';
import Footer from './Components/Footer';
import {Routes, Route} from 'react-router-dom'
import ProductDescriptionScreen from './Screens/ProductDescriptionScreen';

function App() {

  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<HomeScreen/> } />
          <Route path='/products/:id' element={<ProductDescriptionScreen/> } />
        </Routes>
        
      </main>
     <Footer/>
    </div>
  );
}

export default App;
