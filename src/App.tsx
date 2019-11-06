import React from 'react';
import PnwTopAppBar from './PnwTopAppBar';
import PnwGrid from './PnwGrid';
import {
  TopAppBarFixedAdjust
} from '@material/react-top-app-bar';

import './App.scss';
import adventures from './data/adventures.json';
import Adventure from './Adventure'

type AppProps = {}

class App extends React.Component<AppProps> {

  adventures: Adventure[];

  populateAdventures() {

    adventures.forEach(adventure => {
      this.adventures.push({
        name: adventure.name,
        imageUrl: adventure.imageUrl,
        smallDescription: adventure.smallDescription,
        description: adventure.description
      });
    })
  }

  constructor(props: AppProps) {
    super(props);
    this.adventures = [];
    this.populateAdventures();
    console.log(this.adventures)
  }

  render() {
    return (
      <>
        <PnwTopAppBar>
        </PnwTopAppBar>
        <TopAppBarFixedAdjust>
          <PnwGrid>
          </PnwGrid>
        </TopAppBarFixedAdjust>
      </>
    )
  }
}

export default App;
