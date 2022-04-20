import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Forum.</h1>
      </header>
      <main>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <Route path="/post/:id" render={(props) => <Post {...props} />} />
        </Switch>
      </main>
      <footer>
        <small>Linnea Hensfelt Andersson - Inlämningsuppgift 3</small>
      </footer>
    </div>
  );
}

export default App;
