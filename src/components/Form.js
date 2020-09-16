import React from 'react';
import './Form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: null,
      method: '',
      both: '',
    }
  }

  handleWord =  event => {
    let url = event.target.value;
    this.setState({url: url});
  }


  handleClick = event => {
    event.preventDefault();
    let method = event.target.id;
    this.setState({method})
  }

  handleBoth = event  => {
    event.preventDefault();
    let words = this.state.words; 
    let method = this.state.method;
    this.setState({words, method});
  }
  
  goClick = async event => {
   event.preventDefault();
    let raw = await fetch(this.state.url);

    let headers = {};
  
    
    raw.headers.forEach((value, key) => headers[key] = value);

    let data = await raw.json();

    let count = data.count;
    let results = data.results;
    console.log(results);
    this.props.handler(count, results);
  }


  render (){
    return (
    <form id="form-render" onSubmit={this.goClick}>
      <div id="questions">
      <input onChange={this.handleWord} type="text" id="website"/>
      <br></br>
      <button > {this.props.prompt} </button>
     <br></br>
      <input value="GET" onClick={this.handleClick} type="radio" id="GET"/>GET
      
      <input value="POST" onClick={this.handleClick} type="radio" id="POST"/>POST
    
      <input value="PUT" onClick={this.handleClick} type="radio" id="PUT"/>UPDATE
     
      <input value="DELETE" onClick={this.handleClick} type="radio" id="DELETE"/>DELETE
      </div>
      <>
      <h3 id="count">{this.state.method} {this.state.words} </h3>
      </>
      </form>)
    
  }
}

export default Form;

