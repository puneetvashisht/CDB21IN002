import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap'



import 'bootstrap/dist/css/bootstrap.min.css';
import ViewWorkouts from "./components/ViewWorkouts";
import AddWorkout from "./components/AddWorkout";
import WorkoutOperations from "./components/WorkoutOperations";

function App() {
  return (
    <Router>

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">PWT App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="/">View Workouts</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/add">Add Workout</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/add" component={AddWorkout}>
        </Route>
        <Route path="/operations/:id" component={WorkoutOperations}>
        </Route>
        <Route path="/" component={ViewWorkouts}>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;


