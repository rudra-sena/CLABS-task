import './App.css';
import Header from './Components/Header/Header'
import SaveSegment from './Components/SaveSegment/SaveSegment'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="View Audience"/>
        <SaveSegment/>
      </header>
    </div>
  );
}

export default App;
