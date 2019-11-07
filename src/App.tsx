import React from 'react';
import PnwTopAppBar from './PnwTopAppBar';
import PnwGrid from './PnwGrid';
import PnwAdventure from './PnwAdventure';
import {
  TopAppBarFixedAdjust
} from '@material/react-top-app-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route
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
      <>
        <PnwTopAppBar>
        </PnwTopAppBar>
        <TopAppBarFixedAdjust>
          <Router>
            <Switch>
              <Route exact path="/" render={(props) =>
                <PnwGrid {...props} adventures={this.adventures} />} />
              <Route path="/adventures/:adventureId" render={(props) =>
                <PnwAdventure {...props} adventure={this.getAdventure(props.match.params.adventureId)} />} />
            </Switch>
          </Router>
        </TopAppBarFixedAdjust>
      </>
    )
  }
}

export default App;
