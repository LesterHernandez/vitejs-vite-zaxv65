import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function App() {
  const [items, setItems] = useState(['Proyecto']);
  const [nuevoItem, setNuevoItem] = useState('');

  const handleInputChange = (event) => {
    setNuevoItem(event.target.value);
  };

  const agregarElemento = () => {
    if (nuevoItem.trim() !== '') {
      setItems([...items, nuevoItem]);
      setNuevoItem('');
    }
  };

  return (
    <div>
      <h1>Mini Task Dashboard </h1>
      <input
        placeholder="Enter a task"
        type="text"
        value={nuevoItem}
        onChange={handleInputChange}
      />
      <Button variant="primary" onClick={agregarElemento}>
        Add a task
      </Button>
      <ul>
        {items.map((item, index) => (
          <ListGroup numbered>
            <ListGroup.Item key={index}>
              {item}
              <br></br>{' '}
            </ListGroup.Item>
            <li></li>
          </ListGroup>
        ))}
      </ul>
    </div>
  );
}

export default App;
