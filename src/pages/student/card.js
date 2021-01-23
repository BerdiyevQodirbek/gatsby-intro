import React from "react";
import S from "../../styles/pages/group/list";
// import Clock from "../../assets/img/svg/clock.svg";
import { StatusBtn } from "../../styles/index";
import {Link} from 'gatsby'
// import DfImg from "../../assets/img/image.jpg";
// import { useHistory } from "react-router-dom";

const { StyledCard } = S;

const Card = ({ data }) => {
  // const history = useHistory();

  const {
    time,
    title,
    // img,
    weekDays,
    students,
    price,
  } = data;

  const btnHandler = (e) => {
    e.stopPropagation();
    console.log("btn clicked");
  };

  // const cardHandler = (e) => {
  //   history.push("/group-info");
  // };

  return (
    <>
      <StyledCard>
        <div className="card__img-inner">
          <div className="card__icon-inner">
          </div>
          {/* <img className="card__img" src={img || DfImg} alt="" /> */}
        </div>
        <Link to='/group'>
          <div className="card__body">
            <h1 className="card__title">{title}</h1>
            <div className="card__inner">
              <div className="d-flex">
                <h4 className="card__profile-title">{students} students</h4>
              </div>
              <StatusBtn className="card__status">{weekDays}</StatusBtn>
            </div>
            <div className="card__inner">
              <div className="card__time">
                {/* <img className="card__icon" src={Clock} alt="" /> */}
                {time}
              </div>
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
