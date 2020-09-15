import React from 'react';
import './ContentArea.scss';

class ContentArea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      words: 'nothing to see here',
    }
  }
  render (){
    return (
    <input>Please Enter a Website</input>
     )
  }
}

export default ContentArea;

