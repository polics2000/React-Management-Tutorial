import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id': 1,
  'image':'https://placeimg.com/64/64/1',
  'name':'Jay1',
  'birthday':'1988',
  'gender':'male',
  'job':'programmer'
},
{
  'id': 2,
  'image':'https://placeimg.com/64/64/2',
  'name':'Jay2',
  'birthday':'1988',
  'gender':'male',
  'job':'programmer'
},
{
  'id': 3,
  'image':'https://placeimg.com/64/64/3',
  'name':'Jay3',
  'birthday':'1988',
  'gender':'male',
  'job':'programmer'
},
{
  'id': 4,
  'image':'https://placeimg.com/64/64/4',
  'name':'Jay4',
  'birthday':'1988',
  'gender':'male',
  'job':'programmer'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
