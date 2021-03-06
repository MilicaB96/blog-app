import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";
import AppPosts from "./pages/AppPosts";
import SinglePost from "./components/SinglePost";
import AddPost from "./pages/AddPost";

function App() {
  return (
    <Router>
      <div className='App'>
        <nav className='navbar navbar-expand bg-light p-3'>
          <ul className='navbar-nav'>
            <li className='nav-item pe-3'>
              <Link className='text-decoration-none link-dark' to='/posts'>
                Posts
              </Link>
            </li>
            <li className='nav-item pe-3'>
              <Link className='text-decoration-none link-dark' to='/add'>
                Add Post
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/post/:id'>
            <SinglePost />
          </Route>
          <Route path='/edit/:id'>
            <AddPost />
          </Route>
          <Route path='/add'>
            <AddPost />
          </Route>
          <Route exact path='/' render={() => <Redirect to='/posts' />} />
          <Route exact path='/posts'>
            <AppPosts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
