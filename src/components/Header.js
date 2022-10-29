import React, { useState } from 'react';
import { FaShoppingBasket } from 'react-icons/fa'
import Order from './Order';

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map(el => (
        <Order key={el.id} item={el} />
      ))}
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Товарів немає</h2>
    </div>
  )
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div className="fullwidth__containter">
        <div className="container">
          <div className="navigation">
            <a href="#" className="navigation__logo">Happy Toys!</a>
            <div className="navigation__list">
              <FaShoppingBasket className={`navigation__shoppin ${cartOpen && 'active'}`} onClick={() => setCartOpen(cartOpen = !cartOpen)} />

              {cartOpen && (
                <div className='navigation__shoplist'>
                  {props.orders.length > 0 ? showOrders(props) : showNothing()}
                </div>
              )}

              <a href="#">Новинки</a>
              <a href="#">Магазин</a>
              <a href="#">Знижки</a>
            </div>
          </div>
        </div>
      </div>
      <div className="fullwidth__containter">
        <div className="container">
          <div className="presentation">
            <h1>УЛЮБЛЕНІ ГЕРОЇ АНІМЕ</h1>
            <a href="#">ДОДАТИ</a>
          </div>
        </div>
      </div>
    </header>
  )
}