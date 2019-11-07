import React from 'react';
import Adventure from './Adventure'
import {
  RouteComponentProps
} from 'react-router-dom'

type PnwAdventureProps = {
  match: {
    params: {
      adventureId: number
    }
  },
  adventure: Adventure
}


class PnwAdventure extends React.Component<PnwAdventureProps> {

  adventure: Adventure;

  constructor(props: PnwAdventureProps) {
    super(props);
    this.adventure = props.adventure;
    console.log('constructor');
  }

  render() {
    return (
      <>
        <h1>{this.adventure.name}</h1>
        <p>{this.adventure.description}</p>
      </>
    )
  }
}

export default PnwAdventure;
