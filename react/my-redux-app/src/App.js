import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewEmployee from './components/ViewEmployee';
import Totalemp from './components/Totalemp';

function App() {
  return (
    <div className="App">
     <ViewEmployee></ViewEmployee>
     <Totalemp></Totalemp>
    </div>
  );
}

export default App;
