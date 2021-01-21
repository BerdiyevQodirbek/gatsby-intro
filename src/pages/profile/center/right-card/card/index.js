import React, { Component } from "react";
import { Link } from "gatsby";
import S from "../../../../../styles/pages/center";

// import Dots from "../../../../assets/img/svg/dots.svg";
// import Star from "../../../../assets/img/svg/star.svg";
// import Location from "../../../../assets/img/svg/map-marker.svg";


export default class Card extends Component {
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
    const { 
      // Img, 
      Status, Title, Phone, LocationText, Text } = this.props.data;
    return (
      <>
        <S.RightCard>
          {/* <img className="card__dots" src={Dots} alt="" /> */}
          <div className="card__inner">
            <Link to="/instructor">
              {/* <img className="card__img" src={Img} alt="" /> */}
              <div className="status">
                {/* <img src={Star} alt="" className="status__img" /> */}
                {Status}
              </div>
              <h4 className="card__title ">{Title}</h4>
              <div className="card__subtitle">{Phone}</div>
              <div className="card__subtitle d-flex">
                {/* <img className="card__subtitle-img" src={Location} alt="" /> */}
                <span>{LocationText}</span>
              </div>
              <p className="card__text">{Text}</p>
            </Link>
          </div>
        </S.RightCard>
      </>
    );
  }
}
