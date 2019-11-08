import React from 'react';
import Adventure from './Adventure'
import {
  Headline1,
  Body1
} from '@material/react-typography';

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
        <Headline1>{this.adventure.name}</Headline1>
        <Body1>{this.adventure.description}</Body1>
      </>
    )
  }
}

export default PnwAdventure;
