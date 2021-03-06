import React from 'react';
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import Adventure from './Adventure'
import {
  RouteComponentProps
} from 'react-router-dom'

type PnwTopAppBarAdventureProps = {
  adventure: Adventure
  openDialog: () => void;
}

class PnwTopAppBarAdventure extends React.Component<PnwTopAppBarAdventureProps & RouteComponentProps> {

  adventure: Adventure;

  constructor(props: PnwTopAppBarAdventureProps & RouteComponentProps) {
    super(props);
    this.adventure = props.adventure;
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onBackButtonClick = () => {
    this.props.history.push("/")
  }

  onShareButtonClick = () => {
debugger;
    this.props.openDialog();
  }

  render() {
    return (
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection align='start'>
            <TopAppBarIcon navIcon tabIndex={0}>
              <MaterialIcon hasRipple icon='arrow_back' onClick={this.onBackButtonClick} />
            </TopAppBarIcon>
            <TopAppBarTitle>{this.adventure.name}</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection align='end' role='toolbar'>
            <TopAppBarIcon actionItem tabIndex={0}>
              <MaterialIcon
                aria-label="share page"
                hasRipple
                icon='share'
                onClick={this.onShareButtonClick}
              />
            </TopAppBarIcon>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
    )
  }
}

export default PnwTopAppBarAdventure;
