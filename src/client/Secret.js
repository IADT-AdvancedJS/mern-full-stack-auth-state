import React, { Component } from 'react';
import axios from 'axios';

export default class Secret extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Loading...'
    };
  }

  componentDidMount() {
    axios.get('/api/secret')
      .then(response => this.setState({message: response.data}));
  }

  render() {
    return (
      <div>
        <h1>Secret</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
