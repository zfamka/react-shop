import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Items from './components/Items.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Megumin',
          img: 'megumin.jpg',
          description: 'lorem lorem lorem lorem lorem lorem',
          category: 'toys',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Ram',
          img: 'rem.jpg',
          description: 'lorem lorem lorem lorem lorem lorem',
          category: 'toys',
          price: '49.99'
        },
        {
          id: 3,
          title: 'Renko',
          img: 'rinko.jpg',
          description: 'lorem lorem lorem lorem lorem lorem',
          category: 'toys',
          price: '49.99'
        },
        {
          id: 4,
          title: 'Megumin',
          img: 'megumin.jpg',
          description: 'lorem lorem lorem lorem lorem lorem',
          category: 'toys',
          price: '49.99'
        },
        {
          id: 5,
          title: 'Ram',
          img: 'rem.jpg',
          description: 'lorem lorem lorem lorem lorem lorem',
          category: 'toys',
          price: '49.99'
        },
        {
          id: 6,
          title: 'Renko',
          img: 'rinko.jpg',
          description: 'lorem lorem lorem lorem lorem lorem',
          category: 'toys',
          price: '49.99'
        },
        {
          id: 7,
          title: 'Megumin',
          img: 'megumin.jpg',
          description: 'lorem lorem lorem lorem lorem lorem',
          category: 'toys',
          price: '49.99'
        },
        {
          id: 8,
          title: 'Ram',
          img: 'rem.jpg',
          description: 'lorem lorem lorem lorem lorem lorem',
          category: 'toys',
          price: '49.99'
        },
        {
          id: 9,
          title: 'Renko',
          img: 'rinko.jpg',
          description: 'lorem lorem lorem lorem lorem lorem',
          category: 'toys',
          price: '49.99'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this);
  }
  render() {
    return (
      <div>
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        < Footer />
      </div >
    );
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true
      }
    })
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] })
    }
  }
}
export default App;
