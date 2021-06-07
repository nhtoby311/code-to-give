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
import { useContext, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import AuthRoute from './components/AuthRoute/AuthRoute';

let routes = (
  <Switch>
    <AuthRoute exact path="/" component={Home}/>
    <AuthRoute exact path="/leaderboard" component={Leaderboard}/>
    <AuthRoute exact path="/games" component={Games}/>
    <AuthRoute exact path="/profile" component={Profile}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Register}/>
    <AuthRoute exact path="/games/quiz" component={()=>{return <List game="Quiz"/>}}/>
    <AuthRoute exact path="/games/quiz/:id" component={Quiz}/>
    <AuthRoute exact path="/games/scribbly" component={()=>{return <List game="Scribbly"/>}}/>
    <AuthRoute exact path="/games/scribbly/:id" component={Scribbly}/>
    <AuthRoute exact path="/games/pic-quizz" component={()=>{return <List game="Pic-Quizz"/>}}/>
    <AuthRoute exact path="/games/pic-quizz/:id" component={PicQuizz}/>
    <AuthRoute path="/games/admin" component={Admin}/>
    <Route path="*" component={()=>{return "404 NOT FOUND 404 NOT FOUND"}}/>
  </Switch>
)

function App() {
  const { auth } = useContext(AuthContext);

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
