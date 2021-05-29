import { BrowserRouter as Router, Route} from 'react-router-dom';
import Background from './components/Layout/Background/Background';
import Nav from './components/Layout/Nav/Nav';
import Games from './pages/Games/Games';
import Home from './pages/Home/Home'
import Leaderboard from './pages/Leaderboard/Leaderboard';
import './styles/style.scss'


let routes = (
  <>
    <Route exact path="/" component={Home}/>
    <Route exact path="/leaderboard" component={Leaderboard}/>
    <Route exact path="/games" component={Games}/>
  </>
)



function App() {
  return (
    <Router>
      <div id="wrapper">
        <Nav/>
        <Background/>
        {routes}
        <h1>footer</h1>
      </div>
    </Router>
  );
}

export default App;
