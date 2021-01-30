import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const person = { name: 'yoshi', age: 30 };
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
