import React from 'react';
import Adventure from './Adventure'
import './PnwImageList.scss';

type PnwImageListProps = {
  adventure: Adventure
}

class PnwImageList extends React.Component<PnwImageListProps> {

  adventure: Adventure;

  constructor(props: PnwImageListProps) {
    super(props);
    this.adventure = props.adventure;
  }

  toListItem(image: string) {
    return (<li className="mdc-image-list__item">
      <img className="mdc-image-list__image" src={require('./media/' + image)} />
    </li>)
  }

  render() {
    return (
      <ul className="mdc-image-list mdc-image-list--masonry adventure-image-list">
        {this.adventure.images.map(this.toListItem)}
      </ul>
    )
  }
}

export default PnwImageList;
