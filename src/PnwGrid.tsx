import React from 'react';
import {Cell, Grid, Row} from '@material/react-layout-grid';

class PnwGrid extends React.Component {
  static defaultProps = {
    msg: 'Hello everyone!'
  }

  render() {
    return (
      <Grid>
        <Row>
          <Cell columns={4}>Tennis</Cell>
          <Cell columns={4}>Cricket</Cell>
          <Cell columns={4}>StarCraft</Cell>
        </Row>
        <Row>
          <Cell desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}>Tennis</Cell>
          <Cell desktopColumns={4} order={3} phoneColumns={4} tabletColumns={4}>Cricket</Cell>
          <Cell desktopColumns={4} order={1} phoneColumns={4} tabletColumns={4}>StarCraft</Cell>
        </Row>
        <Row>
          <Cell columns={4}>
            <Row>
              <Cell desktopColumns={8} phoneColumns={2} tabletColumns={5}>Tennis</Cell>
              <Cell desktopColumns={4} phoneColumns={2} tabletColumns={3}>Cricket</Cell>
            </Row>
          </Cell>
          <Cell columns={4}> - </Cell>
          <Cell columns={4}> - </Cell>
        </Row>
      </Grid>
    )
  }
}

export default PnwGrid;
