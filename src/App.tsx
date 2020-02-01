import React from 'react';
import PnwTopAppBar from './PnwTopAppBar';
import PnwTopAppBarAdventure from './PnwTopAppBarAdventure';
import PnwGrid from './PnwGrid';
import PnwAdventure from './PnwAdventure';
import ShareDialog from './ShareDialog';
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
type AppState = {
  shareDialogIsOpen: boolean;
}

class App extends React.Component<AppProps, AppState> {

  adventures: Adventure[];

  constructor(props: AppProps) {
    super(props);
    this.adventures = adventures.map(fromAdventureJson);
    this.state = {
      shareDialogIsOpen: false
    }
  }

  getAdventure(adventurePath: string): Adventure {
    return this.adventures.filter(adventure => adventure.path === adventurePath)[0];
  }

  closeDialog = () => this.setState({ shareDialogIsOpen: false })
  openDialog = () => this.setState({ shareDialogIsOpen: true })

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <PnwTopAppBar>
            </PnwTopAppBar>
          </Route>
          <Route path="/adventures/:adventurePath" render={(props) =>
            <PnwTopAppBarAdventure {...props} adventure={this.getAdventure(props.match.params.adventurePath)} openDialog={this.openDialog}  />} />
        </Switch>
        <TopAppBarFixedAdjust>
          <Switch>
            <Route exact path="/" render={(props) =>
              <PnwGrid {...props} adventures={this.adventures} />} />
            <Route path="/adventures/:adventurePath" render={(props) =>
              <PnwAdventure {...props} adventure={this.getAdventure(props.match.params.adventurePath)} />} />
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </TopAppBarFixedAdjust>
        <ShareDialog isOpen={this.state.shareDialogIsOpen } closeDialog={this.closeDialog} > </ShareDialog>
      </Router>
    )
  }
}

export default App;
