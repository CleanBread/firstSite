import React from 'react'

import './footer.css'

class Footer extends React.Component {
    render() {
      return (
      <div className="gird-footer">
        <div className="footer-container">
          <div className="get-in-touch">
            <p>Get in touch</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
          <div className="stay-in-touch">
            <p>Stay in touch</p>
            <label>
              <input className="input"/>
              <button className="footer-btn"></button>
            </label>
            <p>We don’t send spam. Actually, who are we kiding, we’ll spam 
the shit out of you’r inbox</p>
          </div>
        </div>
      </div>
      );
    }
  }
   
export default Footer;