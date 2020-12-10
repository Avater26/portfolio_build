import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// ------------------------- Main Page -------------------------
// Univesal
import Header from "./components/Header";
import Footer from "./components/Footer";

// DK
import Frontpage from "./components/Frontpage";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

// EN
import Frontpage_EN from "./components/Frontpage_EN";
import Skills_EN from "./components/Skills_EN";
import Projects_EN from "./components/Projects_EN";

// ------------------------- Projects -------------------------
// DK
import Memory_Game from "./components/projects/memory_game/memory_game";

// EN
import Card_Draw from "./components/projects/card_draw/card_draw";
import Tarot from "./components/projects/tarot/tarot";
import Memory_Game_EN from "./components/projects/memory_game/memory_game_EN";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Frontpage} />
          <Route exact path="/en" component={Frontpage_EN} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/en/skills" component={Skills_EN} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/en/projects" component={Projects_EN} />
          <Route exact path="/projects/card-draw" component={Card_Draw} />
          <Route exact path="/projects/tarot" component={Tarot} />
          <Route exact path="/projects/memory_game" component={Memory_Game} />
          <Route
            exact
            path="/en/projects/memory_game"
            component={Memory_Game_EN}
          />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
