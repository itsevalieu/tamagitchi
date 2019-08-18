import React, { Component, Fragment } from 'react';
import './App.css';
import Plant from './components/Plant';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      repo: '',
      commits: [],
      plant: '',
      combo: 0,
      missed: 0
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
        console.log('total commits', this.state.commits);
        this.setPlantState(this.state.commits);
      })
      .catch(error => {
        console.log('error', error);
      });
  };
  calculateState = () => {
    if (this.state.combo === 0 && this.state.missed === 0) {
      this.setState({ plant: 0 });
    } else if (this.state.combo === 1 && this.state.missed === 0) {
      this.setState({ plant: 1 });
    } else if (this.state.combo > 1 && this.state.missed === 0) {
      this.setState({ plant: 2 });
    } else if (this.state.combo === 0 && this.state.missed === 1) {
      this.setState({ plant: 3 });
    } else if (this.state.combo === 0 && this.state.missed > 1) {
      this.setState({ plant: 4 });
    } else if (this.state.combo === 0 && this.state.missed > 3) {
      this.setState({ plant: 5 });
    }
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
