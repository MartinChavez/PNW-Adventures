import React from 'react';
import PnwTopAppBar from './PnwTopAppBar';
import PnwGrid from './PnwGrid';
import {
  TopAppBarFixedAdjust
} from '@material/react-top-app-bar';

import './App.scss';
import adventures from './data/adventures.json';

type AppProps = {}

class App extends React.Component<AppProps> {

  constructor(props: AppProps) {
    super(props);

    console.log(adventures)
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
