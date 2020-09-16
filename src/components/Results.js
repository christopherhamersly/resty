import React from 'react';
import './Results.scss';
import JSONPretty from 'react-json-pretty';



const Results = (props) => {

  return (

      <section id="results-section">
      <h3>Count: {props.count}</h3>
      <JSONPretty headers={props.headers}></JSONPretty>
      <JSONPretty data={props.results}></JSONPretty>
      </section>
    
  )

}

export default Results;

