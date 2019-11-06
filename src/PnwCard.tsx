import React from 'react';
import Card, {
  CardPrimaryContent,
  CardMedia
} from "@material/react-card";
import { Body2 } from '@material/react-typography';
import image from './logo512.png'
import './PnwCard.scss';
import Adventure from './Adventure'

type PnwCardProps = {
  adventure: Adventure
}

class PnwCard extends React.Component<PnwCardProps> {

  adventure: Adventure;

  constructor(props: PnwCardProps) {
    super(props);
    this.adventure = props.adventure;
  }

  onClick = (e: any) => {
    alert(this.adventure.id)
  }

  render() {
    return (
      <Card onClick={this.onClick}>
        <CardPrimaryContent>
          <CardMedia
            square
            imageUrl={image}
          >
          </CardMedia>
          <div className='adventures-card__text-label'>
            {this.adventure.name}
          </div>
          <Body2 className='adventures-card__secondary'>
            {this.adventure.smallDescription}
          </Body2>
        </CardPrimaryContent>
      </Card>
    )
  }
}

export default PnwCard;
