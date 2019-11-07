import React from 'react';
import Adventure from './Adventure'

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
        <h1>{this.adventure.name}</h1>
        <p>{this.adventure.description}</p>
      </>
    )
  }
}

export default PnwAdventure;
