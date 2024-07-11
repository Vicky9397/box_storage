import './App.css';
import BoxList from './components/BoxList';

function App() {
  return (
    <div className="App">
      <header style={{textAlign:'center'}}><h1>Box Storage App</h1></header>
      <main><BoxList /></main>
      <footer style={{textAlign:'center'}}>This is a footer</footer>
    </div>
  );
}

export default App;
