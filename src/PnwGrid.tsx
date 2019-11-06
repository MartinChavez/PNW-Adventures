import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import PnwCard from './PnwCard';
import Adventure from './Adventure'

type PnwGridProps = {
  adventures: Adventure[]
}

class PnwGrid extends React.Component<PnwGridProps> {

  adventures: Adventure[];

  constructor(props: PnwGridProps) {
    super(props);
    this.adventures = props.adventures;
  }

  render() {
    return (
      <Grid>
        <Row>
          {this.adventures.map(adventure => <Cell key={adventure.id} columns={4}><PnwCard adventure={adventure}></PnwCard></Cell>)}
        </Row>
      </Grid>
    )
  }
}

export default PnwGrid;
