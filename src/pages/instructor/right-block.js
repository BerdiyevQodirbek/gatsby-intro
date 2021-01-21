import React from "react";
import Card from "../instructors/card";
import Schedule from '../Schedule/index'
import S from "../../styles/components/tabs";
import C from "../../styles/pages/center/instructor";
import D from "../../styles/pages/group/view";
// import CardImg from "../../assets/img/image.jpg";
// import Profile from "../../assets/img/profile.jpg";
import { Tabs } from "antd";

const { TabPane } = Tabs;
const { GroupsCardInner } = C;
const { Wrapper } = S;

function RightTab({data, scheduleHandlerOn, scheduleHandlerOff}) {

  function callback(key) {
    console.log(key);
    key == 2 ? scheduleHandlerOn() : scheduleHandlerOff();
  }
  console.log(data);
  return (
    <D.Table>
      <Wrapper>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Groups" key="1">
            <GroupsCardInner>
              <Card
                data={{
                  title: "Typography Essential",
                  time: "10:00-12:00",
                  // img: CardImg,
                  weekDays: "Mn-Wd-Fr",
                  students: 35,
                  price: 350000,
                }}
              />
              <Card
                data={{
                  title: "Typography Essential",
                  time: "10:00-12:00",
                  // img: CardImg,
                  profileName: "Titus Kitamura",
                  // profile: Profile,
                  weekDays: "Mn-Wd-Fr",
                  students: 35,
                  price: 350000,
                }}
              />
              <Card
                data={{
                  title: "Typography Essential",
                  time: "10:00-12:00",
                  // img: CardImg,
                  profileName: "Titus Kitamura",
                  // profile: Profile,
                  weekDays: "Mn-Wd-Fr",
                  students: 35,
                  price: 350000,
                }}
              />
              <Card
                data={{
                  title: "Typography Essential",
                  time: "10:00-12:00",
                  // img: CardImg,
                  profileName: "Titus Kitamura",
                  // profile: Profile,
                  weekDays: "Mn-Wd-Fr",
                  students: 35,
                  price: 350000,
                }}
              />
              <Card
                data={{
                  title: "Typography Essential",
                  time: "10:00-12:00",
                  // img: CardImg,
                  profileName: "Titus Kitamura",
                  // profile: Profile,
                  weekDays: "Mn-Wd-Fr",
                  students: 35,
                  price: 350000,
                }}
              />
              <Card
                data={{
                  title: "Typography Essential",
                  time: "10:00-12:00",
                  // img: CardImg,
                  profileName: "Titus Kitamura",
                  // profile: Profile,
                  weekDays: "Mn-Wd-Fr",
                  students: 35,
                  price: 350000,
                }}
              />
              <Card
                data={{
                  title: "Typography Essential",
                  time: "10:00-12:00",
                  // img: CardImg,
                  profileName: "Titus Kitamura",
                  // profile: Profile,
                  weekDays: "Mn-Wd-Fr",
                  students: 35,
                  price: 350000,
                }}
              />
              <Card
                data={{
                  title: "Typography Essential",
                  time: "10:00-12:00",
                  // img: CardImg,
                  profileName: "Titus Kitamura",
                  // profile: Profile,
                  weekDays: "Mn-Wd-Fr",
                  students: 35,
                  price: 350000,
                }}
              />
            </GroupsCardInner>
          </TabPane>
          <TabPane tab="Schedule" key="2">
            <h1>{data.InstructorName}</h1>
            <Schedule />
          </TabPane>
        </Tabs>
      </Wrapper>
    </D.Table>
  );
}

export default RightTab;
