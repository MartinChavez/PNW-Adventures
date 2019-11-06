import React from 'react';
import Card, {
  CardPrimaryContent,
  CardMedia
} from "@material/react-card";
import {
  Body2,
  Headline6
} from '@material/react-typography';
import image from './logo512.png'
import './PnwCard.scss';

class PnwCard extends React.Component {
  render() {
    return (
      <Card>
        <CardPrimaryContent>
          <CardMedia
            square
            imageUrl={image}
          >
          </CardMedia>
          <div className='adventures-card__text-label'>
            Our Changing Planet
          </div>
          <Body2 className='adventures-card__secondary'>
            Visit ten places on our planet that are undergoing the biggest changes today.
          </Body2>
        </CardPrimaryContent>
      </Card>
    )
  }
}

export default PnwCard;
