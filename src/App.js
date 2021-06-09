import { BrowserRouter as Router, Route,Switch, useLocation, useParams} from 'react-router-dom';
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
import { useContext, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import AuthRoute from './components/AuthRoute/AuthRoute';
import { QuizProvider } from './context/QuizContext';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Assignment from './components/Admin/Assignment/Assignment';
import AdminNav from './components/Admin/AdminNav/AdminNav';
import styled from 'styled-components'
import Create from './components/Admin/Assignment/Create/Create';

const ContainerAdmin = styled.div`
  width: 75%;
  margin-left: 20%;
  margin-top: 150px;
  border: blue solid 2px;
`

const AdminRoute = (path) => {
  //const location = useLocation()
  console.log(path)

  const routers = (
    <Switch>
      <Route exact path={`${path}`}component={Dashboard}/>
      <Route exact path={`${path}/assignment`}component={Assignment}/>
      <Route exact path={`${path}/assignment/create`}component={Create}/>
    </Switch>
  )
  return (
  <>
    <AdminNav/>
    <ContainerAdmin>
      {routers}
    </ContainerAdmin>
  </>
)};

const MainRoute = () => {
  return (
  <>
    <Nav/>
    <Background/>
    <QuizProvider>
      <Switch>
        <AuthRoute exact path="/" component={Home}/>
        <AuthRoute exact path="/leaderboard" component={Leaderboard}/>
        <AuthRoute exact path="/games" component={Games}/>
        <AuthRoute exact path="/profile" component={Profile}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <AuthRoute exact path="/games/Quiz" component={()=>{return <List game="Quiz"/>}}/>
        <AuthRoute exact path="/games/Quiz/:id" component={Quiz}/>
        <AuthRoute exact path="/games/Scribbly" component={()=>{return <List game="Scribbly"/>}}/>
        <AuthRoute exact path="/games/Scribbly/:id" component={Scribbly}/>
        <AuthRoute exact path="/games/PicQuizz" component={()=>{return <List game="Pic-Quizz"/>}}/>
        <AuthRoute exact path="/games/PicQuizz/:id" component={PicQuizz}/>
      </Switch>
    </QuizProvider>
  </>
)};


const routes = (
  <Switch>
    <AuthRoute path="/admin" component={()=>AdminRoute("/admin")}/>      {/*need to pass parameter to make path route*/}
    <Route path="/" component={MainRoute} />
    <Route component={()=>{return "404 NOT FOUND 404 NOT FOUND"}}/>
  </Switch>
)

function App() {

  return (
    <Router>
      <div id="wrapper">
        {routes}      
      </div>
    </Router>
  );
}

export default App;
