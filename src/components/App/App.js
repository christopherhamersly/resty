
import React from 'react';
import md5 from 'md5';
import axios from'axios';

import './App.scss';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Results from '../Results/Results';
import Footer from '../Footer/Footer';
import History from '../History/History.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      loading: false,
      request: {},
      history: {},
    };
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  updateHistory(request) {

    let hash = md5(JSON.stringify(request));

    const history = { ...this.state.history, [hash]: request }

    this.setState({ history }, () => {
      localStorage.setItem('history', JSON.stringify(this.state.history));
    });
  }

  updateResults = (headers, results) => {
    this.setState({ headers, results });
  };

  updateRequest = (request) => {
    this.setState({ request });
  }

  fetchResults = async (request) => {
    console.log('in the fetch results function');
    try {

      this.toggleLoading();

      this.updateRequest(request);

      let response = await axios(request);

      this.toggleLoading();
      console.log('request', request);
      console.log('response', response);

      this.updateHistory(request);

      this.updateResults(response.headers, response.data);

    }
    catch  {
      
    }
  }

  componentDidMount() {
    let history = JSON.parse(localStorage.getItem('history'));
    this.setState({ history });
  }

  render() {
    return (
      <>
        <Header />
        <Form request={this.state.request} handler={this.fetchResults} />
        <main>
          <History handler={this.updateRequest} calls={this.state.history} />
          <Results loading={this.state.loading} headers={this.state.headers} results={this.state.results} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;