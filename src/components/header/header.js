import React from 'react'

import './header.css'

class Header extends React.Component {
    render() { 
      return (
      <div className="header">
        <div className="text_header">
          <span className="caption_header">Picture perfect</span>
          <p className="sentence-header">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>
      );
    }
  }
   
export default Header;