import React, { Component } from "react";
import S from "../../../../styles/pages/center/index";

// import TopImg from "../../../assets/img/image.jpg";
// import { ReactComponent as Man } from "../../../assets/img/svg/man.svg";
// import { ReactComponent as People } from "../../../assets/img/svg/people.svg";
// import MapMarker from "../../../assets/img/svg/map-marker.svg";
// import PhoneIcon from "../../../assets/img/svg/phone.svg";
// import Calendar from "../../../assets/img/svg/calendar.svg";

export default class Index extends Component {
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
    //   Logo,
      LogoText,
      CenterName,
      Students,
      Groups,
      Location,
      Phone,
      Birthday,
    } = this.props.data;
    return (
      <>
        <S.LeftCard>
          {/* <img className="card__img" src={TopImg} alt="" /> */}
          <div className="card__logo-inner">
            {/* <img className="card__logo-img" src={Logo} alt="" /> */}
            <p className="card__logo-text">{LogoText}</p>
          </div>
          <h1 className="card__title">{CenterName}</h1>
          <p className="card__subtitle">O’quv markazi</p>

          <div className="card__body">
            <div className="card__inner">
              <div className="card__inner-block">
                <div className="card__img-inner">
                  <span className="card__inner-man">
                    {/* <Man /> */}
                  </span>
                </div>
                <div>
                  <h5 className="title">{Students}</h5>
                  <p className="subtitle">Students</p>
                </div>
              </div>
              <div className="card__inner-block">
                <div className="card__img-inner yellow-orange">
                  <span className="card__inner-people">
                    {/* <People /> */}
                  </span>
                </div>
                <div>
                  <h5 className="title">{Groups}</h5>
                  <p className="subtitle">Groups</p>
                </div>
              </div>
            </div>
            <div className="card__block">
              <div className="card__block-img-inner">
                {/* <img src={MapMarker} alt="" className="card__block-img" /> */}
              </div>
              <div>
                <h5 className="title">{Location}</h5>
                <p className="subtitle">Location</p>
              </div>
            </div>

            <div className="card__block">
              <div className="card__block-img-inner">
                {/* <img src={PhoneIcon} alt="" className="card__block-img" /> */}
              </div>
              <div>
                <h5 className="title">{Phone}</h5>
                <p className="subtitle">Phone</p>
              </div>
            </div>

            <div className="card__block">
              <div className="card__block-img-inner">
                {/* <img src={Calendar} alt="" className="card__block-img" /> */}
              </div>
              <div>
                <h5 className="title">{Birthday}</h5>
                <p className="subtitle">Birthday</p>
              </div>
            </div>
          </div>
        </S.LeftCard>
      </>
    );
  }
}
