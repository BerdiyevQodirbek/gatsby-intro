import React from "react";
import S from "../../styles/pages/group/list";
import { StatusBtn } from "../../styles/index";
// import ProfileDf from "../../assets/img/profile.jpg";
// import DfImg from "../../assets/img/image.jpg";
// import Clock from "../../assets/img/svg/clock.svg";
// import Dots from "../../assets/img/svg/dots.svg";
import { Link } from "gatsby";

const { StyledCard } = S;

const Card = ({ data }) => {

  const {
    time,
    title,
    img,
    profile,
    profileName,
    weekDays,
    students,
    price,
  } = data;

  const btnHandler = (e) => {
    e.stopPropagation();
    console.log("btn clicked");
  };

  console.log(data);
  return (
    <>
      <StyledCard>
        <div className="card__img-inner">
          <div className="card__icon-inner">
            <div className="card__time">
              {/* <img className="card__icon" src={Clock} alt="" /> */}
              {time}
            </div>
            {/* <img className="card__dots" src={Dots} alt="" /> */}
          </div>
          {/* <img className="card__img" src={img || DfImg} alt="" /> */}
        </div>
        <Link to='info'>
          <div className="card__body">
            <h1 className="card__title">{title}</h1>
            <div className="card__inner">
              <div className="d-flex">
                {/* <img
                  className="card__profile card__profile--space"
                  src={profile || ProfileDf}
                  alt=""
                /> */}
                <h4 className="card__profile-title">{profileName}</h4>
              </div>
              <StatusBtn className="card__status">{weekDays}</StatusBtn>
            </div>
            <div className="card__inner">
              <h4 className="card__profile-title">{students} students</h4>
              <div className="card__price">{price} UZS</div>
            </div>
          </div>
        </Link>
        <button onClick={btnHandler} className="card__btn">
          Add Student
        </button>
      </StyledCard>
    </>
  );
};

export default Card;
