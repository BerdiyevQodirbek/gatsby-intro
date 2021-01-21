import React, { Component } from "react";

import LeftCard from "./left-card/index";
import RightBlock from "./right-card/index";
// import { ReactComponent as Logo } from "../../assets/img/svg/logo.svg";

import S from "../../../styles/pages/center/index";

export default class Center extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleEvent = this.handleEvent.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.name !== this.state.name) {
      this.handler();
    }
  }

  componentWillUnmount() {}

  // Prototype methods, Bind in Constructor (ES2015)
  handleEvent() {}

  // Class Properties (Stage 3 Proposal)
  handler = () => {
    this.setState();
  };

  render() {
    return (
      <>
        <S.Inner>
          <LeftCard
            data={{
            //   Logo: Logo,
              LogoText: "Academy",
              CenterName: "Alicode Academy",
              Students: 130,
              Groups: 2,
              Location: "London, England",
              Phone: "+99 554 46 60",
              Birthday: "08.02.1999",
            }}
          />
          <RightBlock />
        </S.Inner>
      </>
    );
  }
}
