import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import PnwCard from './PnwCard';
import Adventure from './Adventure'
import {
  RouteComponentProps
} from 'react-router-dom'

type PnwGridProps = {
  adventures: Adventure[]
}

class PnwGrid extends React.Component<PnwGridProps & RouteComponentProps> {

  adventures: Adventure[];

  constructor(props: PnwGridProps & RouteComponentProps) {
    super(props);
    this.adventures = props.adventures;
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  getToCell(props: PnwGridProps & RouteComponentProps) {
    return (adventure: Adventure) => {
      return (
        <Cell key={adventure.id} columns={4}>
          <PnwCard {...this.props} adventure={adventure}>
          </PnwCard>
        </Cell>
      )
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          {this.adventures.map(this.getToCell(this.props))}
        </Row>
      </Grid>
    )
  }
}

export default PnwGrid;
