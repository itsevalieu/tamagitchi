import React, { Component, Fragment } from 'react';
import './App.css';
import Plant from './components/Plant';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      commits: null
    };
  }
  componentDidMount() {
    this.fetchCommits()
      .then(data => {
        this.setState({
          commits: data
        });
        console.log('commits', this.state.commits);
        console.log(this.state.commits[0]);
      })
      .catch(error => {
        console.log('error', error);
      });
  }
  fetchCommits = () => {
    let url = `https://api.github.com/repos`;
    return fetch(`${url}/itsevalieu/home/stats/commit_activity`).then(
      response => {
        return response.json();
      }
    );
  };
  handleChange = e => {
    this.setState({
      user: e.target.value
    });
    console.log(this.state.user);
  };

  render() {
    //if commits is empty, show username input
    return (
      <Fragment>
        <header>
          <h1>Tamagitchi</h1>
        </header>
        <main>
          <input
            placeholder="username"
            onChange={this.handleChange}
            value={this.state.user}
          />
          <span>/</span>
          <input placeholder="repository"></input>
          <Plant />
        </main>
      </Fragment>
    );
  }
}

export default App;
