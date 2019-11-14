import React from 'react';
import PnwTopAppBar from './PnwTopAppBar';
import PnwTopAppBarAdventure from './PnwTopAppBarAdventure';
import PnwGrid from './PnwGrid';
import PnwAdventure from './PnwAdventure';
import {
  TopAppBarFixedAdjust
} from '@material/react-top-app-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.scss';
import adventures from './data/adventures.json';
import Adventure, { fromAdventureJson } from './Adventure'

type AppProps = {}

class App extends React.Component<AppProps> {

  adventures: Adventure[];

  constructor(props: AppProps) {
    super(props);
    this.adventures = adventures.map(fromAdventureJson);
  }

  getAdventure(adventureId: string): Adventure {
    const id = Number(adventureId);
    return this.adventures.filter(adventure => adventure.id === id)[0];
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <PnwTopAppBar>
            </PnwTopAppBar>
          </Route>
          <Route path="/adventures/:adventureId" render={(props) =>
            <PnwTopAppBarAdventure {...props} adventure={this.getAdventure(props.match.params.adventureId)} />} />
        </Switch>
        <TopAppBarFixedAdjust>
          <Switch>
            <Route exact path="/" render={(props) =>
              <PnwGrid {...props} adventures={this.adventures} />} />
            <Route path="/adventures/:adventureId" render={(props) =>
              <PnwAdventure {...props} adventure={this.getAdventure(props.match.params.adventureId)} />} />
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </TopAppBarFixedAdjust>
      </Router>
    )
  }
}

export default App;
