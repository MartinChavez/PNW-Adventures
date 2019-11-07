import React from 'react';
import Card, {
  CardPrimaryContent,
  CardMedia
} from "@material/react-card";
import {
  Body2,
  Headline2
} from '@material/react-typography';
import './PnwCard.scss';
import Adventure from './Adventure'
import {
  RouteComponentProps
} from 'react-router-dom'

type PnwCardProps = {
  adventure: Adventure
}

class PnwCard extends React.Component<PnwCardProps & RouteComponentProps> {

  adventure: Adventure;
  imageUrl: string;

  constructor(props: PnwCardProps & RouteComponentProps) {
    super(props);
    this.adventure = props.adventure;
    this.imageUrl = require('./media/' + this.adventure.imageUrl)
  }

  onClick = () => {
    this.props.history.push(this.getToUrl())
  }

  getToUrl() {
    return "/adventures/" + this.adventure.id;
  }

  render() {
    return (
      <Card onClick={this.onClick}>
        <CardPrimaryContent>
          <CardMedia
            square
            imageUrl={this.imageUrl}
          >
          </CardMedia>
          <Headline2 className='adventures-card__text-label'>{this.adventure.name}</Headline2>
          <Body2 className='adventures-card__secondary'>
            {this.adventure.smallDescription}
          </Body2>
        </CardPrimaryContent>
      </Card>
    )
  }
}

export default PnwCard;
