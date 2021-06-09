import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header-bar/header';
import Home from './components/home/home';
import Data from './components/data-fetch/dataFetch';
import CounterHook from './components/CounterHook';
import ObjectStateHook from './components/ObjectStateHook';
import ArrayStateHook from './components/ArrayStateHook';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/DataFetch" component={Data} />
          <Route path="/CounterHook" component={CounterHook} />
          <Route path="/ObjectStateHook" component={ObjectStateHook} />
          <Route path="/ArrayStateHook" component={ArrayStateHook} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
