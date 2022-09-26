// import singlePost from "./components/singlePost/SinglePost";
import TopBar from "./components/topbar/TopBar";
import Home from './pages/home/Home';
import Single from "./pages/single/Single";
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Sidebar from './components/sidebar/Sidebar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const user = true;
  return (
    <Router>
    <TopBar></TopBar>
    <Switch>
      <Route path="/" exact><Home/></Route>
      <Route path="/register">{user ? <Home/> : <Register/>}</Route>
      <Route path="/login">{user ? <Login/> : <Register/>}</Route>
      <Route path="/write">{user ? <Write/> : <Register/>}</Route>
      <Route path="/settings">{user ? <Settings/> : <Register/>}</Route>
      <Route path="/sidebar">{user ? <Sidebar/> : <Settings/>}</Route>
      <Route path="/post/:postId"><Single/></Route>
    </Switch>
  </Router>
  );
}

export default App;
