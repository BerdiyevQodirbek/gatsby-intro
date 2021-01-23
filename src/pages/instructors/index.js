import React, { useState } from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";
// import Info from "./info";
import List from './list'
import Card from "./card";
import S from "../../styles/pages/group/list";
// import CardImg from "../../assets/img/image.jpg";
// import Profile from "../../assets/img/profile.jpg";
// import List from "../../assets/img/svg/list.svg";
// import SelectList from "../../assets/img/svg/stuedntsSelect.svg";
// import Block from "../../assets/img/svg/sutudentsBlock.svg";
// import Arrow from "../../assets/img/svg/selectArrowDown.svg";


const { 
  GroupsInner, 
  InnerStudents,
  GroupsCardInner 
} =S

const Index = () => {
  const [clicked, setClicked] = useState(false);
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [isList, setisList] = useState(true);

  const selectHandler = () => {};

  const selectChekedHandler = () => {
    setClicked(!clicked);
  };

  // const show = () => {
  //   setIsModalVisible(true)
  // }
  // const hide = () => {
  //   setIsModalVisible(false)
  // }
  return (
    <Layout>
      <GroupsInner>
        <InnerStudents>
          <div>
            <h4 className="title">246 ta o’quvchi bor</h4>
            <p className="subtitle">Sizning filterlaringizga mos keladigan</p>
          </div>
          <div className="d-flex">
            <div className="select">
              <button className="button" onClick={selectChekedHandler}>
                {/* <img
                  className="select__img select__img-large"
                  src={SelectList}
                  alt=""
                /> */}
                <div className="select__text">Darslar</div>
                {/* <img className="select__img" src={Arrow} alt="" /> */}
              </button>
              <div
                className={
                  clicked ? "select__body select__body--active" : "select__body"
                }
              >
                <button onClick={selectHandler} className="select__option">
                  Ona tili
                </button>
                <button onClick={selectHandler} className="select__option">
                  Ona tili
                </button>
                <button onClick={selectHandler} className="select__option">
                  Ona tili
                </button>
              </div>
            </div>
            <button onClick={() => setisList(true)} className="sort__btn sort__btn--space">
              {/* <img className="sort__btn-img" src={List} alt="" /> */}
            </button>
            <button onClick={() => setisList(false)} className="sort__btn btn-green">
              {/* <img className="sort__btn-img" src={Block} alt="" /> */}
            </button>
          </div>
        </InnerStudents>
        <InnerStudents>
          <div className="inner" style={{justifyContent: 'flex-end'}}>
            <Link to='add'>
              <button className="btn-green create__btn">
                Create Instructor
              </button>
            </Link>
          </div>
        </InnerStudents>
      </GroupsInner>
      {isList ? <List /> : (<GroupsCardInner>
        <Card
          data={{
            title: "Typography Essential",
            time: "11:00",
            // img: CardImg,
            profileName: "Titus Kitamura",
            // profile: Profile,
            profileStatus: "Advansed",
            students: 35,
            price: 350000,
            weekDays: "Mn-Wd-Fr"
          }}
        />
        <Card
          data={{
            title: "Typography Essential",
            time: "11:00",
            // img: CardImg,
            profileName: "Titus Kitamura",
            // profile: Profile,
            profileStatus: "Advansed",
            students: 35,
            price: 350000,
            weekDays: "Mn-Wd-Fr"
          }}
        />
        <Card
          data={{
            title: "Typography Essential",
            time: "11:00",
            // img: CardImg,
            profileName: "Titus Kitamura",
            // profile: Profile,
            profileStatus: "Advansed",
            students: 35,
            price: 350000,
            weekDays: "Mn-Wd-Fr"
          }}
        />
        <Card
          data={{
            title: "Typography Essential",
            time: "11:00",
            // img: CardImg,
            profileName: "Titus Kitamura",
            // profile: Profile,
            profileStatus: "Advansed",
            students: 35,
            price: 350000,
            weekDays: "Mn-Wd-Fr"
          }}
        />
        <Card
          data={{
            title: "Typography Essential",
            time: "11:00",
            // img: CardImg,
            profileName: "Titus Kitamura",
            // profile: Profile,
            profileStatus: "Advansed",
            students: 35,
            price: 350000,
            weekDays: "Mn-Wd-Fr"
          }}
        />
        <Card
          data={{
            title: "Typography Essential",
            time: "11:00",
            // img: CardImg,
            profileName: "Titus Kitamura",
            // profile: Profile,
            profileStatus: "Advansed",
            students: 35,
            price: 350000,
            weekDays: "Mn-Wd-Fr"
          }}
        />
        <Card
          data={{
            title: "Typography Essential",
            time: "11:00",
            // img: CardImg,
            profileName: "Titus Kitamura",
            // profile: Profile,
            profileStatus: "Advansed",
            students: 35,
            price: 350000,
            weekDays: "Mn-Wd-Fr"
          }}
        />
        <Card
          data={{
            title: "Typography Essential",
            time: "11:00",
            // img: CardImg,
            profileName: "Titus Kitamura",
            // profile: Profile,
            profileStatus: "Advansed",
            students: 35,
            price: 350000,
            weekDays: "Mn-Wd-Fr"
          }}
        />
      </GroupsCardInner>
    )}</Layout>
  );
};

export default Index;
