import React, {useState, useEffect} from 'react';
import md5 from 'md5';
import './Form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    const method = props.request.method || 'get';
    const url = props.request.url || '';
    const data = props.request.data ? JSON.stringify(props.request.data) : '';
    this.state = {
      request: {
      url,
      method,
      data,
    }
  };
  }
// built in react function
  componentDidUpdate(props) {
    const nextHash = md5(JSON.stringify(props.request));
    const stateHash = md5(JSON.stringify(this.state.request));

    if (nextHash === stateHash) return;

    const request = {...props.request};
    this.setState({request});
  }

  changeURL = (event) => {
  let url = event.target.value;
  const newRequest = {...this.state.request, url};
  this.setState({request: newRequest});
  }

  changeMethod = (method) => {
    const newRequest = {...this.state.request, method};
    this.setState({request: newRequest});
  }

  changeBody = (event) => {
    try {
      let data = JSON.parse(event.target.value);
      const newRequest = {...this.state.request, data};

      this.setState({ request: newRequest});
    } catch(error) {
      console.log('error', error);
    }
  };

  handleSubmit = async event => {
    event.preventDefault()
    this.props.handler(this.state.request);
  };

 


  render (){
    return (
    <form id="form-render" onSubmit={this.handleSubmit}>
      <div id="questions">
      <input 
      name="url"
      onChange={this.changeURL} 
      type="text" 
      id="website"
      placeholder="www.whateveryouwant.inhere"
      defaultValue={this.state.request.url}/>
      <br></br>
      <button> Let's go.  </button>
     <br></br>
      <button  className={`method ${this.state.request.method === 'get'}`} onClick={() => this.changeMethod('get')} id="GET">GET </button>
      
      <button className={`method ${this.state.request.method === 'post'}`} id="POST" onClick={()=> this.changeMethod('post')}>POST</button>
    
      <button className={`method ${this.state.request.method === 'put'}`}  id="PUT" onClick={() => this.changeMethod('put')}>UPDATE</button>
     
      <button className={`method ${this.state.request.method === 'delete'}`} id="DELETE" onClick={() => this.changeMethod('delete')}>DELETE
      </button>
      <>
      <br></br>
      <textarea name="data" onChange={this.changeBody} defaultValue={this.state.request.data} placeholder="text goes here" />
      </>
      </div>
      </form>)
    
  }
}

export default Form;

