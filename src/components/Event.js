import React, { Component } from 'react';

export default class Event extends Component {
  componentWillMount() {
    this.props.onMount(this.props.match.params.id);
  }

  render() {
    const event = this.props.event
    return (
      <div>
        <h1>event</h1>
        <p>{event.theme}</p>
        <p>{event.detail}</p>
        <ul>
          {event.choices.map((choice, i) => (
            <li key={i}>{choice.name}</li>
          ))}
        </ul>
      </div>
    );
  }
};
