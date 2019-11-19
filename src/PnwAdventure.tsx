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

  centerText: React.CSSProperties = {
    textAlign: "center"
  };

  render() {
    return (
      <>
        <Grid>
          <Row>
            <Cell columns={12}>
              <Headline3 style={this.centerText}>{this.adventure.name}</Headline3>
            </Cell>
          </Row>
          <Row>
            <Cell columns={12}>
              <Body1 style={this.centerText}>{this.adventure.smallDescription}</Body1>
            </Cell>
          </Row>
        </Grid>
        <PnwImageList adventure={this.adventure}></PnwImageList>
      </>
    )
  }
}

export default PnwAdventure;
