import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import PnwCard from './PnwCard';

class PnwGrid extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Cell columns={4}><PnwCard></PnwCard></Cell>
          <Cell columns={4}>Cricket</Cell>
          <Cell columns={4}>StarCraft</Cell>
        </Row>
      </Grid>
    )
  }
}

export default PnwGrid;
