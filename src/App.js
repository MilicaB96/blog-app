import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";
import AppPosts from "./pages/AppPosts";

function App() {
  return (
    <Router>
      <div className='App'>
        <nav className='navbar navbar-expand bg-light p-3'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='text-decoration-none link-dark' to='/posts'>
                Posts
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/posts' />} />
          <Route path='/posts'>
            <AppPosts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
