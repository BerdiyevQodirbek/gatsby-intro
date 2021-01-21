import React, { useState } from "react";
import { Switch, Table } from "antd";
import { Button, FlexWrapper } from "../../styles";
import S from "../../styles/pages/payment";
// import { ReactComponent as Print } from "../../assets/svg/groups/print.svg";
import Create from './create'
import Layout from '../../components/layout'

const Index = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const groupData = [
    { name: 'Math' },
    { name: 'IELTS' },
    { name: 'Front-end' },
  ]

  const studentData = [
    { name: 'Maftun' },
    { name: 'Iroda' },
    { name: 'Farrux' },
  ]

  const onSwitchChange = (e) => {
    console.log(e);
  };

  const columns = [
    {
      title: "",
      dataIndex: "key",
      key: "id",
      width: 30,
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
      title: "Course",
      dataIndex: "course",
      key: "course",
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
      title: "Status",
      dataIndex: "paid",
      key: "status",
      render: (text) => (
        <FlexWrapper justify="flex-start" align="flex-start">
          {text >= "100000" ? "Paid" : <div>- {text} </div>}
        </FlexWrapper>
      ),
    },
    {
      title: "Course Price",
      dataIndex: "paid",
      key: "price",
      render: (text) => (
        <FlexWrapper justify="flex-start" align="flex-start">
          <p style={{ marginLeft: "15px" }}>{text} UZS</p>
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
      render: () => (
        <FlexWrapper justify="space-between">
          {/* <Print style={{ cursor: "pointer" }} /> */}
          <div className="table__action-view">Pay</div>
        </FlexWrapper>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      img:
        "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
      courseImg:
        "https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264__340.jpg",
      course: "Reactjs",
      paid: "100 000",
      student: "John Brown",
      createdAt: "8/30/14",
      paidType: "Cash",
    },
    {
      key: "2",
      img:
        "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
      courseImg:
        "https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264__340.jpg",
      course: "Reactjs",
      paid: "80 000",
      student: "Hey Brown",
      createdAt: "8/30/14",
      paidType: "Bank",
    },
    {
      key: "3",
      img:
        "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
      courseImg:
        "https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264__340.jpg",
      course: "Reactjs",
      paid: "60 000",
      student: "Key Brown",
      createdAt: "8/30/14",
      paidType: "Other",
    },
    {
      key: "4",
      img:
        "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
      courseImg:
        "https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264__340.jpg",
      course: "Reactjs",
      paid: "90 000",
      student: "Korlin Brown",
      createdAt: "8/30/14",
      paidType: "Cash",
    },
  ];

  return (
    <Layout>

      <S.Wrapper>
        <S.Nav>
          <div className="nav__block">
            <h3 className="nav__title">Payments</h3>
            <p>01/01/2018 - 31/12/2018</p>
          </div>
          <div className="nav__block nav__block-right">
            <div className="nav__switch">
              <p className="nav__switch-label">Show debts</p>
              <Switch onChange={onSwitchChange} />
            </div>
            <Create isPayment={isModalVisible} handler={showModal} groupDb={groupData} studentDb={studentData} />
            <Button onClick={showModal} width="100px" status="success">
              New Payment
          </Button>
          </div>
        </S.Nav>
        <Table dataSource={data} columns={columns} />
      </S.Wrapper>
    </Layout>
  );
};

export default Index;
