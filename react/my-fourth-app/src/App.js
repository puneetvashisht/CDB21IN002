import logo from './logo.svg';
import './App.css';
// import Country from './components/Country'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEmployee from './components/AddEmployee';
import ViewCourses from './components/ViewCourses';


function App() {
  return (
    <Router>

      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/addemp">Add Course</Link>
            </li>
            <li>
              <Link to="/viewcourses">View Courses</Link>
            </li>
          </ul>
        </nav>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/addemp">
            <AddEmployee />
          </Route>
          <Route path="/viewcourses">
            <ViewCourses />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
