
import './App.css';
import Badge from './Badge'
import Card from './Card'

function App() {
  return (
    <div className="App">
       <h2>My first react app</h2>
       <Badge caption="Inbox"></Badge>
       <Badge caption="Sent"></Badge>
       <Card></Card>
       
    </div>
  );
}

export default App;
