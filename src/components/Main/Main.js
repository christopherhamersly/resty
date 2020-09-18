import React from 'react';
import './Main.scss';
import {Route, Switch} from 'react-router-dom';

import Form from '../Form/Form';
import Help from '../Help/Help';
import History from '../History/History';
import md5 from 'md5';
import axios from 'axios';



function Main (props) {

  // constructor(props) {
  //   super(props);
  //   console.log(props);
  //   this.state = {
  //     loading: false,
  //     request: {},
  //     history: {},
  //   };
  // }

  toggleLoading = () => {
    const setState = ({ loading: !this.state.loading });
  }

  updateHistory = (request) =>  {

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

  componentDidMount = () => {
    let history = JSON.parse(localStorage.getItem('history'));
    this.setState({ history });
  }

  return(
   <main>
      <Switch>
        <Route exact path="/resty">
        <Form request={this.state.request} handler={this.fetchResults} />
        </Route>
        <Route exact path="/history">
          <History handler={this.updateRequest} calls={this.state.history}/>
        </Route>
        <Route exact path="help">
          <Help />
          
        </Route>
      </Switch>
    </main>
    
  );
};


export default Main;
