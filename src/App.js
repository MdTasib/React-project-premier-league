import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const products = [
    { name: 'Iphone', price: '$222' },
    { name: 'Vivo', price: '$123' },
    { name: 'Nokia', price: '$52' },
    { name: 'Nokia', price: '$52' },
  ]

  return (
    <div className="App">
      <header className="App-header">
        {/* {
          products.map(pd => <Product product={pd}></Product>)
        } */}

        <Counter></Counter>
        <Users></Users>

      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h2>Dynamic load data : {users.length}</h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  return (<div>
    <h1>Counter: {count}</h1>
    <button onClick={() => { setCount(count + 1) }}>+</button>
    <button onClick={() => { setCount(count - 1) }}>-</button>
  </div>
  )
}

function Product(props) {

  const productStyle = {
    backgroundColor: 'gray',
    color: '#fff',
    width: '200px',
    margin: '15px',
    padding: '15px'
  }

  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}
export default App;
