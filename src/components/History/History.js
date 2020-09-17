import React from 'react';

function History(props) {
  const calls = props.calls || {};

  function loadRequest(apiCall) {
    props.handler(apiCall);
  }

  return(
    <aside className="historyRender"> History
      <ul>
      {
        Object.keys(calls).map(key => 
          <li key={key}>
            <span className={`method ${props.call[key].method}`}>{props.calls[key].method}</span>
            <button className="url" onClick={() => loadRequest(props.calls[key])}>{props.calls[key].url}</button>
          </li>, )
      }  
      </ul>
    </aside>
  );
}


export default History;