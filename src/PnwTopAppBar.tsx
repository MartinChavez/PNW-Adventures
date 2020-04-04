import React from "react";
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from "@material/react-top-app-bar";
import pnwLogo from "./media/icons/logo.png"; //

class PnwTopAppBar extends React.Component {
  render() {
    return (
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection align="start">
            <TopAppBarIcon navIcon>
              <img src={pnwLogo} alt="PNW Logo" />
            </TopAppBarIcon>
            <TopAppBarTitle>Pacific Northwest Adventures</TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
    );
  }
}

export default PnwTopAppBar;
