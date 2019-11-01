import React from 'react';
import Button from '@material/react-button';
import PnwTopAppBar from './PnwTopAppBar';
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
        <Button>
          CORRIE MCQUEWEN!
      </Button>
      </TopAppBarFixedAdjust>
    </>
  );
}

export default App;
