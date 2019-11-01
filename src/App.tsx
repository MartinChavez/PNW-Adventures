import React from 'react';
import PnwTopAppBar from './PnwTopAppBar';
import PnwGrid from './PnwGrid';
import {
  TopAppBarFixedAdjust
} from '@material/react-top-app-bar';

import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <PnwTopAppBar>
      </PnwTopAppBar>
      <TopAppBarFixedAdjust>
        <PnwGrid>
        </PnwGrid>
      </TopAppBarFixedAdjust>
    </>
  );
}

export default App;
