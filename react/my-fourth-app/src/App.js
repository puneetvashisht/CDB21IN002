import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Country from './components/Country'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddCourse from './components/AddCourse';
import ViewCourses from './components/ViewCourses';
import ReadForm from './components/ReadForm';
import About from './components/About';


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
              <Link to="/addcourse">Add Course</Link>
            </li>
            <li>
              <Link to="/viewcourses">View Courses</Link>
            </li>
          </ul>
        </nav>
      <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/addcourse">
            <AddCourse />
          </Route>
          <Route path="/viewcourses">
            <ViewCourses />
          </Route>
          <Route path="/">
            <ReadForm />
          </Route>
          
        </Switch>
    </Router>
  );
}

export default App;


function Home() {
  return <h2>Home</h2>;
}


function Users() {
  return <h2>Users</h2>;
}
