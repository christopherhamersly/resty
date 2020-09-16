
import React from 'react';
import './App.scss';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';
import Footer from './components/Footer';


//this is the app and also the parent
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      results: [],
      headers: {},
    }
  }
  handleForm = (count , results, headers) => {
    this.setState({count, results, headers });
  }
  
  //add some stuff here that is the state that can be shared amongst the children
  render() {
  return (
    <div>
      <Header />
      <Form prompt="Go" handler={this.handleForm}/>
      <Results count={this.state.count} results={this.state.results} header={this.state.headers}/>
      <Footer />
    </div>
  );

 
}
}



export default App;
