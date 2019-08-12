import React, { Component, Fragment } from 'react';
import './App.css';
import Plant from './components/Plant';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      repo: '',
      commits: null,
      plant: 0
    };
  }
  componentDidMount() {}
  fetchCommits = (user, repo) => {
    let url = `https://api.github.com/repos`;
    return fetch(`${url}/${user}/${repo}/stats/commit_activity`).then(
      response => {
        return response.json();
      }
    );
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = e => {
    console.log('submitted', this.state.user, this.state.repo);
    this.fetchCommits(this.state.user, this.state.repo)
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
  };
  setPlantState = data => {
    let plant = 1;
    this.setState({ plant });
  };
  render() {
    //if commits is empty, show username input
    return (
      <Fragment>
        <header>
          <h1>Tamagitchi</h1>
        </header>
        <main>
          <Plant plant={this.state.plant} />
          <input
            placeholder="username"
            onChange={this.handleChange}
            value={this.state.user}
            name="user"
          />
          <span>/</span>
          <input
            placeholder="repository"
            onChange={this.handleChange}
            name="repo"
            value={this.state.repo}
          ></input>
          <button onClick={this.handleClick}>Check!</button>
        </main>
      </Fragment>
    );
  }
}

export default App;
