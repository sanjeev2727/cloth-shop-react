import { Route } from 'react-router';
import './App.css';
import Home from './pages/home/Home';

const Hats = () => (
  <h1>Hats Page</h1>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/hats" component={Hats} />
    </div>
  );
}

export default App;
