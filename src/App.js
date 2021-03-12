import './App.css';
import FindFoods from './components/FindFoods';
import Like from './components/Like';
import RandomUser from './components/RandomUser';

function App() {
  
  return (
    <div className="App">
      <Like/>
      <RandomUser/>
      <FindFoods/>
    </div>
  );
}

export default App;
