import {Switch, Route, Link} from 'react-router-dom';
import "./styles/app.scss";
import { Login } from "./pages/Login";
import { Home } from './pages/Home';

function App() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="*" component={Login} />
    </Switch>
  
  );
}

export default App;
