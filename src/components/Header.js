import React from "react";

export default function Header() {
  return (
    <header>
      <div className="fullwidth__containter">
        <div className="container">
          <span className="logo">Happy Toys!</span>
          <ul className="navigation">
            <li>Новинки</li>
            <li>Магазин</li>
            <li>Знижки</li>
          </ul>
        </div>
      </div>
      <div className="fullwidth__containter">
        <div className="container">
          <div className="presentation"></div>
        </div>
      </div>
    </header>
  )
}