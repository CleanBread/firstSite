import React from 'react'

import './container-1.css'

class Container_1 extends React.Component {
    render() {
      return (
      <div className="container-1">
        <div className="legacy">
            <span>LEGACY</span>
        </div>
        <div className="text-in-co_1">
            <span>Go it solo</span>
            <p>Any delicate you how kindness horrible outlived servants. If in so bred at dare rose lose good. Took sold add play may none him few. Celebrated delightful an especially increasing instrument am. Painful so he an comfort is manners. Feel and make two real miss use e</p>
        </div>
        
        <div>
          <button className="buying-btn" src="#">BUY NOW $9</button>
        </div>
        <div>
          <a href="https://www.apple.com/" target="_blank"><div className="logo-apple"/></a>
          <a href="http://www.microsoft.com/ru-ru/windows" target="_blank"><div className="logo-windows"/></a>
        </div>
      </div>
      );
    }
  }
   
export default Container_1;