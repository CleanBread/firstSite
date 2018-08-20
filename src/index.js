import React from 'react'
import {render} from 'react-dom'

import Header from './components/header/header'
import Content from './components/content/content'
import FullImage from './components/full-image/full-image'
import Colour from './components/colour/colour'
import Buying from './components/buying/buying'

import './index.css'

class HomePage extends React.Component {
  render() {
    return (
    <div className="home_page">
        <Header/>
        <Content/>
        <FullImage/>
        <Colour/>
        <Buying/>
    </div>
    );
  }
}
 
render(
  <HomePage/>,
  document.getElementById('root')
);