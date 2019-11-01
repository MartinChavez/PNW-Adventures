import React from 'react';
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@material/react-card";

class PnwCard extends React.Component {
  render() {
    return (
      <Card>
        <CardPrimaryContent>
          <h1>Header</h1>
          <CardMedia square imageUrl='./logo512.png' />
        </CardPrimaryContent>

        <CardActions>
          <CardActionButtons>
            <button>Click Me</button>
          </CardActionButtons>

          <CardActionIcons>
            <i>Click Me Too!</i>
          </CardActionIcons>
        </CardActions>
      </Card>
    )
  }
}

export default PnwCard;
