import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Background from './components/Layout/Background/Background';
import Nav from './components/Layout/Nav/Nav';
import List from './components/List/List';
import Quiz from './components/Quiz/Quiz';
import Scribbly from './components/Scribbly/Scribbly';
import Games from './pages/Games/Games';
import Home from './pages/Home/Home'
import Leaderboard from './pages/Leaderboard/Leaderboard';
import Profile from './pages/Profile/Profile';
import './styles/style.scss'
import PicQuizz from './components/PicQuizz/PicQuizz';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Admin from './pages/Admin/Admin';


function App() {
  let routes = (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/leaderboard" component={Leaderboard}/>
      <Route exact path="/games" component={Games}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/games/quiz" component={()=>{return <List game="Quiz"/>}}/>
      <Route exact path="/games/quiz/:id" component={Quiz}/>
      <Route exact path="/games/scribbly" component={()=>{return <List game="Scribbly"/>}}/>
      <Route exact path="/games/scribbly/:id" component={Scribbly}/>
      <Route exact path="/games/pic-quizz" component={()=>{return <List game="Pic-Quizz"/>}}/>
      <Route exact path="/games/pic-quizz/:id" component={PicQuizz}/>
      <Route path="/games/admin" component={Admin}/>
    </Switch>
  )
  
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
