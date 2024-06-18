import './App.css';
import logo from './Components/logo-999.png'
import Header from './Components/Header';
import HomeScreen from './Screens/HomeScreen';
import Footer from './Components/Footer';

function App() {

  return (
    <div className='App'>
      <Header />
      <main>
        <HomeScreen/>
      </main>
     <Footer/>
    </div>
  );
}

export default App;
