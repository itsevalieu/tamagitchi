import { useState } from "react";
import "./App.css";
import Plant from "./components/Plant";

function App() {
  const [user, setUser] = useState("");
  const [repo, setRepo] = useState("");
  const [commits, setCommits] = useState([]);
  const [plant, setPlant] = useState("");
  const [combo, setCombo] = useState(0);
  const [missed, setMissed] = useState(0);

  const fetchCommits = (user, repo) => {
    let url = `https://api.github.com/repos`;
    return fetch(`${url}/${user}/${repo}/stats/commit_activity`).then(
      (response) => {
        return response.json();
      }
    );
  };
  const handleChange = (e) => {
    setUser({
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (e) => {
    this.fetchCommits(user, repo)
      .then((data) => {
        setCommits({
          commits: data,
        });
        console.log("total commits", commits);
        this.setPlantState(commits);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const calculateState = () => {
    if (combo === 0 && missed === 0) {
      this.setState({ plant: 0 });
    } else if (combo === 1 && missed === 0) {
      this.setState({ plant: 1 });
    } else if (combo > 1 && missed === 0) {
      this.setState({ plant: 2 });
    } else if (combo === 0 && missed === 1) {
      this.setState({ plant: 3 });
    } else if (combo === 0 && missed > 1) {
      this.setState({ plant: 4 });
    } else if (combo === 0 && missed > 3) {
      this.setState({ plant: 5 });
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Tamagitchi</h1>
      </header>
      <main>
        <Plant plant={plant} />
        <input
          placeholder="username"
          onChange={handleChange}
          value={user}
          name="user"
        />
        <span>/</span>
        <input
          placeholder="repository"
          onChange={handleChange}
          name="repo"
          value={repo}
        ></input>
        <button onClick={handleClick}>Check!</button>
      </main>
    </div>
  );
}

export default App;
