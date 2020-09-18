import React from 'react';

import { If, Then, Else, When } from '../If/If';
import ReactJson from 'react-json-view';

import loading from '../img/dog.gif';

const Results = (props) => {

  return (
    <section id="results-section">

        {
            props.loading ? (
                <div className="loading">
                    <img src={loading} alt="Loading" />
                </div>
            ) : (
                <>
                <h3>Headers</h3>
                <ReactJson src={props.headers} />
                <h3>Results</h3>
                <ReactJson src={props.results} />
                </>
            )
        }

      {<If condition={props.loading}>
        <Then>
          <div className="loading">
            <img src={loading} alt="Loading" />
          </div>
        </Then>
        <Else>
          <When condition={props.results}>
            <h2>Headers</h2>
            <ReactJson src={props.headers} />
            <h2>Results</h2>
            <ReactJson src={props.results} />
          </When>
        </Else>
      </If> }

    </section>
  );

};

export default Results;