import React from 'react';

const Event = ({event}) => (
  <div>
    <h1>event</h1>
    <p>{event.theme}</p>
    <p>{event.detail}</p>
    <ul>
      {event.choices.map((choice, i) => (
        <li key={i}>{choice}</li>
      ))}
    </ul>
  </div>
);

export default Event;
