import React from 'react';
import Adventure from './Adventure'
import {
  Headline3,
  Body1,
  Body2
} from '@material/react-typography';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import PnwImageList from './PnwImageList';

type PnwAdventureProps = {
  adventure: Adventure
}

class PnwAdventure extends React.Component<PnwAdventureProps> {

  adventure: Adventure;

  constructor(props: PnwAdventureProps) {
    super(props);
    this.adventure = props.adventure;
  }

  render() {
    return (
      <>
        <Grid>
          <Row>
            <Cell></Cell>
            <Cell>
              <Headline3>{this.adventure.name}</Headline3>
            </Cell>
            <Cell></Cell>
          </Row>
          <Row>
            <Cell></Cell>
            <Cell>
              <Body1>{this.adventure.smallDescription}</Body1>
            </Cell>
            <Cell></Cell>
          </Row>
          <Row>
            <Cell></Cell>
            <Cell>
              <Body2>{this.adventure.description}</Body2>
            </Cell>
            <Cell></Cell>
          </Row>
        </Grid>
        <PnwImageList adventure={this.adventure}></PnwImageList>
      </>
    )
  }
}

export default PnwAdventure;
