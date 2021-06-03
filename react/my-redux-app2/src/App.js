import logo from './logo.svg';
import './App.css';
import ViewEmployees from './components/ViewEmployees';
import Totalemp from './components/Totalemp';
import AddEmployee from './components/AddEmployee';
import Increment from './components/Increment';
import Decrement from './components/Decrement';


function App() {


  return (
    <div className="App">
      {/* <AddEmployee></AddEmployee>
     <ViewEmployees></ViewEmployees>
     <Totalemp></Totalemp> */}
     <Increment></Increment>
     <Decrement></Decrement>
    </div>
  );
}

export default App;
