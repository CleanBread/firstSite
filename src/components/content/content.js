import React from 'react'


import Text from '../text/text'
import BoxGrid from '../box-grid/box-grid'
import FourCol from '../four-col/four-col'

import './content.css'

class Content extends React.Component {
    render() {
      return (
      <div className="content">
        <Text className="text"/>
        <BoxGrid className="box-grid"/>
        <FourCol className="our-col"/>
      </div>
      );
    }
  }
   
export default Content;