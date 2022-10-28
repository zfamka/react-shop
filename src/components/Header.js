import React, { useState } from 'react';
import { FaShoppingBasket } from 'react-icons/fa'

export default function Header() {
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
                <div className='navigation__shoplist'></div>
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