import React from 'react'
import {render} from 'react-dom'

import Header from '../src/components/header/header'
import Content from '../src/components/content/content'
import FullImage from '../src/components/full-image/full-image'

import './index.css'

class HomePage extends React.Component {
  render() {
    return (
    <div className="home_page">
        <Header/>
        <Content/>
        <FullImage/>
    </div>
    );
  }
}
 
render(
  <HomePage/>,
  document.getElementById('root')
);