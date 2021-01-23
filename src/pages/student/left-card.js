import React from "react";
import Layout from '../../components/layout'
import S from "../../styles/pages/center/index";
import I from "../../styles/pages/center/instructor";

// import TopImg from "../../assets/img/image.jpg";
// import MapMarker from "../../assets/img/svg/map-marker.svg";
// import PhoneIcon from "../../assets/img/svg/phone.svg";
// import Calendar from "../../assets/img/svg/calendar.svg";
// import Mail from "../../assets/img/svg/mail.svg";


function Card({ data }) {
  const {
    current,
    // Logo,
    InstructorName,
    Location,
    email,
    Phone,
    Birthday,
    Profession,
  } = data;
  return (
    <Layout>
      <S.LeftCard>
        {/* <img className="card__img" src={TopImg} alt="" /> */}
        <I.InstructorImg>
          {/* <img src={Logo} alt="" /> */}
        </I.InstructorImg>
        <h1 className="card__title">{InstructorName}</h1>
        <p className="card__subtitle">{Profession}</p>
        <I.StateButton>{current}</I.StateButton>
        <div className="card__body">
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
              {/* <img src={Mail} alt="" className="card__block-img" /> */}
            </div>
            <div>
              <h5 className="title">{email}</h5>
              <p className="subtitle">Email</p>
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
    </Layout>
  );
}

export default Card;
