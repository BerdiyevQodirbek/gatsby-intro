import React, { useState } from "react";
import Card from "./card";
import S from "../../styles/components/tabs";
import C from "../../styles/pages/center/instructor";
import B from "../../styles/pages/center/index";
import D from "../../styles/pages/group/view";
// import Create from "./payment";
import { Tabs, Table, Switch } from "antd";
import { FlexWrapper } from "../../styles/index";
import { Badge } from "../../styles/badge";
// import Attandance from './attandance'

// import TabStyle from "../../styles/components/tabs";
import TableStyle from "../../styles/components/table";
import NavStyle from "../../styles/components/nav";

// import CardImg from "../../assets/img/image.jpg";
// import Profile from "../../assets/img/profile.jpg";
// import { ReactComponent as Print } from "../../assets/svg/groups/print.svg";

const { TabPane } = Tabs;

function RightTab() {


//  Colums for Table

const paymentsColumns = [
  {
    title: "",
    dataIndex: "key",
    key: "id",
    width: 40,
  },
  {
    title: "Course",
    dataIndex: "course",
    key: "course",
    render: (text, record) => (
      <FlexWrapper justify="flex-start" align="flex-start">
        <img className="table__col-img" src={record.img} alt="student-img" />
        <p style={{ marginLeft: "5px" }}>{text}</p>
      </FlexWrapper>
    ),
  },
  {
    title: "Course price",
    dataIndex: "coursePrice",
    key: "coursePrice",
    render: (text) => (
      <FlexWrapper justify="flex-start" align="flex-start">
        <p style={{ marginLeft: "0px" }}>{text} UZS</p>
      </FlexWrapper>
    ),
  },
  {
    title: "Paid",
    dataIndex: "paid",
    key: "paid",
    render: (text) => (
      <FlexWrapper justify="flex-start" align="flex-start">
        <p style={{ marginLeft: "0px" }}>{text} UZS</p>
      </FlexWrapper>
    ),
  },
  {
    title: "Remaining debt",
    dataIndex: "debt",
    key: "remaining debt",
    render: (text) => (
      <FlexWrapper justify="flex-start" align="flex-start">
        <p style={{ marginLeft: "0px" }}>{text} UZS</p>
      </FlexWrapper>
    ),
  },
  {
    title: "Date",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Type",
    dataIndex: "paidType",
    key: "paidType",
    render: (text) => <p style={{ textTransform: "capitalize" }}>{text} </p>,
  },
  {
    title: "Action",
    dataIndex: "debt",
    key: "action",
    render: (text, record) => (
      <FlexWrapper justify="space-between">
        {text != "0" ? <><button onClick={showStudentPayment} className="table__action-view">Pay</button>
        {/* <Create modalShower={showStudentPayment} modalHider={hideStudentPayment} modal={isStudentModalVisible} Data={[{ name: record.course }]} /> */}
        </>: ""
    }
      </FlexWrapper>
    ),
  },
];

const attendanceColumns = [
  {
    title: "",
    dataIndex: "key",
    key: "id",
    width: 40,
  },
  {
    title: "Course",
    dataIndex: "course",
    key: "name",
    render: (text, record) => (
      <FlexWrapper justify="flex-start" align="flex-start">
        <img
          className="table__col-img"
          src={record.courseImg}
          alt="student-img"
        />
        <p style={{ marginLeft: "15px" }}>{text}</p>
      </FlexWrapper>
    ),
  },
  {
    title: "Instructor",
    dataIndex: "teacher",
    key: "teacher",
    render: (text, record) => (
      <FlexWrapper justify="flex-start" align="flex-start">
        <img
          className="table__col-img"
          src={record.teacherImg}
          alt="student-img"
        />
        <p style={{ marginLeft: "15px" }}>{text}</p>
      </FlexWrapper>
    ),
  },
  {
    title: "Date",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text) =>
      text === "Present" ? (
        <Badge display="flex" justify="center" status="success">
          {" "}
          {text}{" "}
        </Badge>
      ) : text === "Late" ? (
        <Badge display="flex" justify="center" status="warning">
          {" "}
          {text}{" "}
        </Badge>
      ) : (
        <Badge display="flex" justify="center" status="danger">
          {" "}
          {text}{" "}
        </Badge>
      ),
  },
];

//  Data for table

const attendanceData = [
  {
    key: "1",
    teacherImg:
      "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
    courseImg:
      "https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264__340.jpg",
    course: "Design",
    teacher: "John Brown",
    createdAt: "8/30/14",
    status: "Present",
    phone: "+99 899 557 87 99",
  },
  {
    key: "2",
    teacherImg:
      "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
    courseImg:
      "https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264__340.jpg",
    course: "back-end",
    teacher: "John Snow",
    createdAt: "8/30/14",
    status: "Late",
    phone: "+99 899 557 87 99",
  },
  {
    key: "3",
    teacherImg:
      "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
    courseImg:
      "https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264__340.jpg",
    course: "Design",
    teacher: "John Brown",
    createdAt: "8/30/14",
    status: "Present",
    phone: "+99 899 557 87 99",
  },
  {
    key: "4",
    teacherImg:
      "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
    courseImg:
      "https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264__340.jpg",
    course: "front-end",
    teacher: "John Alley",
    createdAt: "8/30/14",
    status: "Absent",
    phone: "+99 899 557 87 99",
  },
];
const paymentsData = [
  {
    key: "1",
    img: "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
    coursePrice: "100 000",
    paid: "100 000",
    debt: "0",
    course: "Front-end",
    createdAt: "8/30/14",
    paidType: "Cash",
  },
  {
    key: "2",
    img: "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
    coursePrice: "80 000",
    paid: "50 000",
    debt: "30 00",
    course: "Back-end",
    createdAt: "8/30/14",
    paidType: "Bank",
  },
  {
    key: "3",
    img: "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
    coursePrice: "60 000",
    paid: "50 000",
    debt: "10 00",
    course: "Design",
    createdAt: "8/30/14",
    paidType: "Other",
  },
  {
    key: "4",
    img: "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
    coursePrice: "90 000",
    paid: "90 000",
    debt: "0",
    course: "Front-end",
    createdAt: "8/30/14",
    paidType: "Cash",
  },
];

// Data for student

const studentData = [
  { name: "Design" },
  { name: "Front-end" },
  { name: "Back-end" },
];

      const [isModalVisible, setIsModalVisible] = useState(false);
      const [isStudentModalVisible, setIsStudentModalVisible] = useState(false);

  const show = () => {
    setIsModalVisible(true)
  }
  
  const hide = () => {
    setIsModalVisible(false)
  }

  const showStudentPayment = () => {
    console.log('student');
    setIsStudentModalVisible(true)
  }

  const hideStudentPayment = () => {
    setIsStudentModalVisible(false)
  }


  const onSwitchChange = (key) => {
    console.log(key);
  };

  const [isSchedule, setIsSchedule] = useState(false);

  function callback(key) {
    console.log(key);
    key === 2 ? setIsSchedule(true) : setIsSchedule(false);
  }
  console.log(isSchedule);
  return (
    <D.Table>
      <S.Wrapper>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Groups" key="1">
            <C.GroupsCardInner>
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
            </C.GroupsCardInner>
          </TabPane>
          <TabPane tab="Attendance" key="2">
            <TableStyle.TableBlock>
              <NavStyle.Block>
                <div className="nav__left">
                  <p className="nav__date">01/01/2018 - 31/12/2018 </p>
                </div>
                <div className="nav__right">
                  <p className="nav__switch">Show absents</p>
                  <Switch onChange={onSwitchChange} />
                </div>
              </NavStyle.Block>
              <Table
                // bordered
                dataSource={attendanceData}
                columns={attendanceColumns}
              />
            </TableStyle.TableBlock>
          </TabPane>
          <TabPane tab="Payments" key="3">
            <TableStyle.TableBlock>
              <NavStyle.Block>
                <div className="nav__left">
                  <p className="nav__date">01/01/2018 - 31/12/2018 </p>
                </div>
                <div className="nav__center">
                  <p className="nav__switch">Show debts</p>
                  <Switch onChange={onSwitchChange} />
                </div>
                <div className="nav__right">
                  {/* <Create modalShower={show} modalHider={hide} modal={isModalVisible} Data={studentData} /> */}
                  <B.RightButton onClick={show}>New payment</B.RightButton>
                </div>
              </NavStyle.Block>
              <Table dataSource={paymentsData} columns={paymentsColumns} />
            </TableStyle.TableBlock>
          </TabPane>
        </Tabs>
      </S.Wrapper>
    </D.Table>
  );
}

export default RightTab;
