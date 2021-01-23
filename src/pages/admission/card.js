import React, { Component } from "react";
import S from "../../styles/pages/admission";

// import Dots from "../../assets/img/svg/dots.svg";
// import Phone from "../../assets/img/svg/phone.svg";
// import Clock from "../../assets/img/svg/clock.svg";
// import Face from "../../assets/img/profile.jpg";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate(prevState) {
    if (prevState.name !== this.state.name) {
      this.handler();
    }
  }

  componentWillUnmount() {}

  // Prototype methods, Bind in Constructor (ES2015)

  // Class Properties (Stage 3 Proposal)
  handler = () => {
    this.setState();
  };

  render() {
    const { title, subtitle, phone, time } = this.props;
    return (
      <>
        <S.Card>
          <div className="card__body">
            <div className="card__inner">
              <input className="card__inp" type="checkbox" />
              {/* <img className="card__dots" src={Dots} alt="" /> */}
            </div>
            {/* <img className="card__img" src={userImg ? userImg : Face} alt="" /> */}
            <div className="card__title">{title}</div>
            <p className="card__subtitle">{subtitle}</p>
            <div className="d-flex">
              {/* <img className="card__icon" src={Phone} alt="" /> */}
              <span>{phone}</span>
            </div>
            <div className="d-flex">
              {/* <img className="card__icon" src={Clock} alt="" /> */}
              <span>{time}</span>
            </div>
          </div>
          <button className="card__btn">Add to group</button>
        </S.Card>
      </>
    );
  }
}
