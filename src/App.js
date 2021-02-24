import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const friends = ['hasan', 'rifat', 'risat', 'jalal', 'Salah', 'tarek'];
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'Pdf Reader', price: '$7.99' },
    { name: 'Adobe AE', price: '$7.99' },
    { name: 'Adobe lr', price: '$7.99' },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>This is another paragraph</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            friends.map(friend => <li>{friend}</li>)
          }
        </ul>
        <ol>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ol>
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        {
          products.map(product => <Product product={product}></Product>)
        }
        
        {
          friends.map(friend =><Person name={friend} job="footballer"></Person>)
        }
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '2px solid green',
    borderRadius: '20px',
    height: '200px',
    boxShadow: '10px 10px 30px yellow',
    margin: '10px',
    float: 'left',
    padding: '10px',
    width: '200px'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Counter(){
  const [count, setCount]=useState(0);
  const handleIncrease=()=>{
    const newCount = count+1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onMouseMove={()=>{setCount(count-1)}}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return (
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.name} : {user.email}</li>)
        }
        {
          console.log(users)
        }
      </ul>
    </div>
  )
}

function Person(props) {
  return (
    <div style={{ border: "2px solid gold", width: '400px' }}>
      <h3>My name: {props.name}</h3>
      <p>My job : {props.job}</p>
    </div>
  )
}

export default App;
