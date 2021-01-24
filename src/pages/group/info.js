import React, { useState } from "react";
import { Link } from "gatsby";
import { Checkbox, Button, Table, Tabs, Switch, Popover, message } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import Create from "./payment";
import CreateAttandance from "./attandence";
import Layout from '../../components/layout'
// import { ReactComponent as Clock } from "../../assets/svg/groups/clock.svg";
// import { ReactComponent as User } from "../../assets/svg/groups/user.svg";
// import { ReactComponent as Graduate } from "../../assets/img/svg/graduation.svg";
// import { ReactComponent as Print } from "../../assets/svg/groups/print.svg";

import { FlexWrapper } from "../../styles/index";
import S from "../../styles/pages/group/view";
import C from "../../styles/pages/center/index";
import { Badge } from "../../styles/badge";
import TabStyle from "../../styles/components/tabs";
import TableStyle from "../../styles/components/table";
import NavStyle from "../../styles/components/nav";

const { TabPane } = Tabs;
const { RightButton } = C;

// Data for Students

const dataStudent = [
  { name: "John Brown" },
  { name: "Hey Brown" },
  { name: "Key Brown" },
  { name: "Korlin Brown" },
];

const Index = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const [isStudentPaymentVisible, setIsStudentPaymentVisible] = useState(false);

  const showModal = () => {
    console.log("Attandance");
    setIsModalVisible(!isModalVisible);
  };
  const showPayment = () => {
    console.log("payment");
    setIsPaymentVisible(!isPaymentVisible);
  };

  const showStudentPayment = () => {
    console.log("student");
    setIsStudentPaymentVisible(!isStudentPaymentVisible);
  };


  const onChange = (e) => {
    console.log(e.target.checked);
  };

  const tabsHandler = (key) => {
    console.log(key);
  };

  const onSwitchChange = (key) => {
    console.log(key);
  };

  const kickStudent = () => {
    console.log("go hell");
    message.warning("Student left");
  };

  // const graduateStudent = () => {
  //   console.log("go hell with diploma");
  //   message.success("Student graduated");
  // };

  // three table columns below

  const paymentsColumns = [
    {
      title: "",
      dataIndex: "key",
      key: "id",
      width: 40,
    },
    {
      title: "Students",
      dataIndex: "student",
      key: "student",
      render: (text, record) => (
        <FlexWrapper justify="flex-start" align="flex-start">
          <img className="table__col-img" src={record.img} alt="student-img" />
          <p style={{ marginLeft: "15px" }}>{text}</p>
        </FlexWrapper>
      ),
    },
    {
      title: "Status",
      dataIndex: "debt",
      key: "status",
      render: (text) => (
        <FlexWrapper justify="flex-start" align="flex-start">
          {text === "0" ? "Paid" : <div>-{text} </div>}
        </FlexWrapper>
      ),
    },
    {
      title: "Paid",
      dataIndex: "paid",
      key: "paid",
      render: (text) => (
        <FlexWrapper justify="flex-start" align="flex-start">
          <p style={{ marginLeft: "15px" }}>{text} UZS</p>
        </FlexWrapper>
      ),
    },
    {
      title: "Type",
      dataIndex: "paidType",
      key: "paidType",
      render: (text) => <p style={{ textTransform: "capitalize" }}>{text} </p>,
    },

    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "debt",
      render: (text, record) => (
        <FlexWrapper justify="space-between">
          {/* <Print style={{ cursor: "pointer" }} /> */}

          {text === 0 ? (
            ""
          ) : (
              <>
                <Create
                  paymentHandler={showStudentPayment}
                  isPayment={isStudentPaymentVisible}
                  Data={[{ name: record.student }]}
                />
                <button onClick={showStudentPayment} className="table__action-view">
                  Pay
            </button></>
            )}
        </FlexWrapper>
      ),
    },
  ];

  const studentColumns = [
    {
      title: "",
      dataIndex: "key",
      key: "id",
      width: 40,
    },
    {
      title: "Student",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <FlexWrapper justify="flex-start" align="flex-start">
          <img className="table__col-img" src={record.img} alt="student-img" />
          <p style={{ marginLeft: "15px", marginBottom: "0" }}>{text}</p>
        </FlexWrapper>
      ),
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },

    {
      title: "Action",
      key: "action",
      render: () => (
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* <Graduate
            onClick={graduateStudent}
            style={{
              cursor: "pointer",
              fontSize: "18px",
              width: "18px",
              height: "18px",
              marginBottom: "10px",
            }}
          /> */}
          <Popover
            content={
              <>
                <textarea></textarea>
                {/* <br /> */}
                <Button
                  onClick={kickStudent}
                  style={{
                    marginLeft: "auto",
                    display: "block",
                    height: "25px",
                    lineHeight: "150% !important",
                    padding: "0 10px",
                  }}
                >
                  Ok
                </Button>
              </>
            }
            trigger={["click"]}
          >
            <ExportOutlined style={{ cursor: "pointer", fontSize: "17px" }} />
          </Popover>
          {/* <Trash style={{ cursor: "pointer" }} /> */}
        </div>
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
      title: "Percentage",
      dataIndex: "percent",
      key: "percent",
      render: (text) =>
        text === 100 ? (
          <Badge display="flex" justify="center" status="success">
            {" "}
            {text} %{" "}
          </Badge>
        ) : text > 68 ? (
          <Badge display="flex" justify="center" status="warning">
            {" "}
            {text} %{" "}
          </Badge>
        ) : (
              <Badge display="flex" justify="center" status="danger">
                {" "}
                {text} %{" "}
              </Badge>
            ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <FlexWrapper justify="space-between">
          <div className="table__action-view">View</div>
          {/* <Print style={{ cursor: "pointer" }} /> */}
        </FlexWrapper>
      ),
    },
  ];

  // table data below

  const studentData = [
    {
      key: "1",
      img:
        "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
      name: "John Brown",
      createdAt: "8/30/14",
      phone: "+99 899 557 87 99",
    },
    {
      key: "2",
      img:
        "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
      name: "Jim Green",
      createdAt: "8/30/14",
      phone: "+99 894 346 81 99",
    },
    {
      key: "3",
      img:
        "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
      name: "Joe Black",
      createdAt: "8/30/14",
      phone: "+99 899 557 87 99",
    },
  ];

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
      percent: 100,
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
      percent: 80,
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
      percent: 70,
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
      percent: 60,
      phone: "+99 899 557 87 99",
    },
  ];

  const paymentsData = [
    {
      key: "1",
      img:
        "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
      paid: "100 000",
      student: "John Brown",
      createdAt: "8/30/14",
      paidType: "Cash",
      debt: "100000",
    },
    {
      key: "2",
      img:
        "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
      paid: "80 000",
      student: "Hey Brown",
      createdAt: "8/30/14",
      paidType: "Bank",
      debt: "0",
    },
    {
      key: "3",
      img:
        "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
      paid: "60 000",
      student: "Key Brown",
      createdAt: "8/30/14",
      paidType: "Other",
      debt: "0",
    },
    {
      key: "4",
      img:
        "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
      paid: "90 000",
      student: "Korlin Brown",
      createdAt: "8/30/14",
      paidType: "Cash",
      debt: "0",
    },
  ];

  return (
    <Layout>
      <FlexWrapper padding="0 15px" align="flex-start" justify="space-between">
        <S.Info>
          <div className="info__img">
            <img
              src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="info-img"
            />
          </div>
          <div className="info__box">
            <h3 className="info__title">Typograhpy</h3>
            <p className="info__subject">Design</p>
            <div className="info__teacher-block">
              <h4 className="info__teacher-title">Instructors</h4>
              <div className="info__teacher-row">
                <img
                  className="info__teacher-img"
                  alt="teacher-img"
                  src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <p className="info__teacher-name">Titus Kitamura</p>
              </div>
            </div>
            <div className="info__days">
              <div className="info__days-row">
                <h4 className="info__days-title">Lesson days</h4>
                <p className="info__days-time-box">
                  <span className="info__days-icon">
                    {/* <Clock /> */}
                  </span>
                  <span className="info__days-time">11:00 - 13:00</span>
                </p>
              </div>
              <div className="info__checkboxs">
                <FlexWrapper justify="flex-start">
                  <Checkbox onChange={onChange}>Mon</Checkbox>
                  <Checkbox onChange={onChange}>Tue</Checkbox>
                  <Checkbox onChange={onChange}>Wed</Checkbox>
                </FlexWrapper>
                <FlexWrapper justify="flex-start">
                  <Checkbox onChange={onChange}>Thur</Checkbox>
                  <Checkbox onChange={onChange}>Frid</Checkbox>
                  <Checkbox onChange={onChange}>Sat</Checkbox>
                  <Checkbox onChange={onChange}>Sun</Checkbox>
                </FlexWrapper>
              </div>
              <FlexWrapper margin="30px 0 0 0">
                <div className="info__footer-box">
                  <div className="info__icon info__icon-blue">
                    {/* <User /> */}
                  </div>
                  <div className="info__footer-inner">
                    <h4 className="info__num">14</h4>
                    <p className="info__students-label">Students</p>
                  </div>
                </div>
                <div className="info__footer-box">
                  <div className="info__icon info__icon-orange">
                    {/* <User /> */}
                  </div>
                  <div className="info__footer-inner">
                    <h4 className="info__num">
                      <span className="info__num">480 000</span>
                      <span className="info__num">UZS</span>
                    </h4>
                    <p className="info__students-label">Price</p>
                  </div>
                </div>
              </FlexWrapper>
              <Button>Active</Button>
            </div>
          </div>
        </S.Info>

        <S.Table>
          <TabStyle.Wrapper>
            <Tabs defaultActiveKey="1" onChange={tabsHandler}>
              <TabPane tab="Students" key="1">
                <TableStyle.TableBlock>
                  <NavStyle.Block>
                    <div className="nav__left">
                      <p className="nav__date">01/01/2018 - 31/12/2018 </p>
                    </div>
                    <div className="nav__right">
                      <Link to='/student/add'>
                      <RightButton
                        style={{ margin: "0px" }}
                      >
                          New Student
                      </RightButton>
                      </Link>
                    </div>
                  </NavStyle.Block>
                  <Table
                    bordered
                    dataSource={studentData}
                    columns={studentColumns}
                  />
                </TableStyle.TableBlock>
              </TabPane>
              <TabPane tab="Attendance" key="2">
                <TableStyle.TableBlock>
                  <NavStyle.Block>
                    <div className="nav__left">
                      <p className="nav__date">01/01/2018 - 31/12/2018 </p>
                    </div>
                    <div className="nav__center">
                      <p className="nav__switch">Show absents</p>
                      <Switch onChange={onSwitchChange} />
                    </div>
                    <div className="nav__right">
                      <CreateAttandance
                        handler={showModal}
                        isModal={isModalVisible}
                      />
                    </div>
                  </NavStyle.Block>
                  <Table
                    bordered
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
                      <RightButton
                        onClick={showPayment}
                        style={{ margin: "0px" }}
                      >
                        New Payment
                    </RightButton>
                      <Create
                        paymentHandler={showPayment}
                        isPayment={isPaymentVisible}
                        Data={dataStudent}
                      />
                    </div>
                  </NavStyle.Block>
                  <Table
                    bordered
                    dataSource={paymentsData}
                    columns={paymentsColumns}
                  />
                </TableStyle.TableBlock>
              </TabPane>
            </Tabs>
          </TabStyle.Wrapper>
        </S.Table>
      </FlexWrapper>
    </Layout>
  );
};

export default Index;
