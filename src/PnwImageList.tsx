import React from 'react';
import Adventure from './Adventure'

type PnwImageListProps = {
  adventure: Adventure
}

class PnwImageList extends React.Component<PnwImageListProps> {

  adventure: Adventure;

  constructor(props: PnwImageListProps) {
    super(props);
    this.adventure = props.adventure;
  }

  render() {
    return (
      <ul className="mdc-image-list mdc-image-list--masonry my-masonry-image-list">
        <li className="mdc-image-list__item">
          <img className="mdc-image-list__image" src={require('./media/' + this.adventure.mainImage)} />
        </li>
      </ul>
    )
  }
}

export default PnwImageList;
