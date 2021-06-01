import { BrowserRouter as Router, Route} from 'react-router-dom';
import Background from './components/Layout/Background/Background';
import Nav from './components/Layout/Nav/Nav';
import Games from './pages/Games/Games';
import Home from './pages/Home/Home'
import Leaderboard from './pages/Leaderboard/Leaderboard';
import Profile from './pages/Profile/Profile';
import './styles/style.scss'


let routes = (
  <>
    <Route exact path="/" component={Home}/>
    <Route exact path="/leaderboard" component={Leaderboard}/>
    <Route exact path="/games" component={Games}/>
    <Route exact path="/profile" component={Profile}/>
  </>
)



function App() {
  return (
    <Router>
      <div id="wrapper">
        <Nav/>
        <Background/>
        {routes}
      </div>
    </Router>
  );
}

export default App;
