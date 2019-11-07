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
  Route,
  Link
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

  getAdventure(adventureId: number): Adventure {
    return this.adventures.filter(adventure => adventure.id == adventureId)[0];
  }

  render() {
    return (
      <>
        <PnwTopAppBar>
        </PnwTopAppBar>
        <TopAppBarFixedAdjust>
          <Router>
            <Switch>
              <Route exact path="/">
                <PnwGrid adventures={this.adventures}>
                </PnwGrid>
              </Route>
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
