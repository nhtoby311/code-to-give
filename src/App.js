import { BrowserRouter as Router, Route} from 'react-router-dom';
import Background from './components/Layout/Background/Background';
import Nav from './components/Layout/Nav/Nav';
import Quiz from './components/Quiz/Quiz';
import Scribbly from './components/Scribbly/Scribbly';
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
    <Route exact path="/games/quiz" component={Quiz}/>

    <Route exact path="/games/scribbly" component={Scribbly}/>
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
