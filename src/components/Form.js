import React from 'react';
import './Form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      words: '',
      method: '',
    }
  }

  handleWord = event => {
    let words = event.target.value;
    this.setState({words});
  }


  handleClick = event => {
    event.preventDefault();
    let method = event.target.id;
      

    this.setState({method})
  }

  render (){
    return (
    <form id="form render">
      <div id="questions">
      <input onChange={this.handleWord} type="text" id="website"/>
      <br></br>
      <button onClick={this.handleClick} type="radio" id="GET">GET</button>
      <br></br>
      <button onClick={this.handleClick} type="radio" id="POST">POST</button>
      <br></br>
      <button onClick={this.handleClick} type="radio" id="UPDATE">UPDATE</button>
      <br></br>
      <button onClick={this.handleClick} type="radio" id="DELETE">DELETE</button>
      </div>
      <div id="results render">
      <h3>{this.state.method}   {this.state.words}</h3>
      </div>
      </form>)
    
  }
}

export default Form;
