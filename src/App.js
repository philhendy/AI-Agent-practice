import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CombinedBooking from './components/CombinedBooking';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <section id="book">
        <CombinedBooking />
      </section>
    </div>
  );
}

export default App;
