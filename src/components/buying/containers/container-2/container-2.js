import React from 'react'

import './container-2.css'

class ContainerTwo extends React.Component {
    render() {
      return (
      <div className="container-2">
      <div className="most">
            <span>Most Popular</span>
        </div>
        <div className="text-in-co_1">
            <span>Team Plan</span>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu t am. Painful so he an comfort is manners. Feel and make two real miss use e</p>
        </div>
        
        <div>
          <button className="buying-btn" src="#">BUY NOW $18</button>
        </div>
        <div>
          <a href="https://www.apple.com/" target="_blank"><div className="logo-apple"/></a>
          <a href="http://www.microsoft.com/ru-ru/windows" target="_blank"><div className="logo-windows"/></a>
        </div>
      </div>
      );
    }
  }
   
export default ContainerTwo;