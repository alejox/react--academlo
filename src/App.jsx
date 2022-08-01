import './App.css';
import AboutMe from './components/AboutMe';
import Food from './components/Food';
import FreeTime from './components/FreeTime';
import Hobbies from './components/Hobbies';
import Technologies from './components/Technologies';


function App() {
  

  return (
    <div className='app'>
      <AboutMe/>
      <Hobbies/>
      <FreeTime/>
      <Food/>
      <Technologies/>
    </div>
  );
}

export default App;
