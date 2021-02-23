import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person name='Tasib' profession='Programmar'></Person>
        <Person name='Rafi' profession='Developer'></Person>
        <Person name='Rakib' profession='Student'></Person>
      </header>
    </div>
  );
}
function Person(props) {
  const personStyle = {
    border: '2px solid red',
    margin: '20px',
    padding: '20px'
  }
  return (
    <div style={personStyle}>
      <h3>My Name Is {props.name}</h3>
      <p>I am a {props.profession}</p>
    </div>
  )
}

export default App;
