import React from 'react';
import md5 from 'md5';
import axios from 'axios';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
// import Form from '../Form/Form';
// import Results from '../Results/Results';
// import History from '../History/History';

import './App.scss';
import { BrowserRouter } from 'react-router-dom';

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

    try {

      this.toggleLoading();

      this.updateRequest(request);

      let response = await axios(request);

      this.toggleLoading();


      this.updateHistory(request);

      this.updateResults(response.headers, response.data);

    }
    catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    let history = JSON.parse(localStorage.getItem('history'));
    this.setState({ history });
  }

  render() {
    return (
      <>
      <BrowserRouter>
        <Header />
        <Main />
        {/* <Form request={this.state.request} handler={this.fetchResults} /> */}
        {/* <main> */}
          {/* <History handler={this.updateRequest} calls={this.state.history} /> */}
          {/* <Results loading={this.state.loading} headers={this.state.headers} results={this.state.results} /> */}
        {/* </main> */}
        <Footer />
      </BrowserRouter>
      </>
    );
  }
}

export default App;