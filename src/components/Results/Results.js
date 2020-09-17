import React from 'react';
import './Results.scss';
import ReactJson from 'react-json-view';
import {If, Then, Else, When} from '../If/If';

import loading from '../../img/dog.gif';





const Results = (props) => {
  return (
    <section id="results-section">

        {
            props.loading ? (
                <>
                    <img src={loading} alt="Loading" />
                </>
            ) : (
                <>
                <h3>Headers</h3>
                <ReactJson src={props.headers} />
                <h3>Results</h3>
                <ReactJson src={props.results} />
                </>
            )
        }
    </section>
  )

}

export default Results;

