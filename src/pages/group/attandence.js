import React from "react";
import { Modal, Table, Popover } from "antd";
import { FlexWrapper } from "../../styles/index";

import B from "../../styles/button";
import C from "../../styles/pages/center/index";
import S from "../../styles/components/attandance";
import F from "../../styles/forms/User";
// import { ReactComponent as Chat } from "../../assets/img/svg/chat.svg";

const btnHandler = (e) => {
  console.log(e);
};
const columns = [
  {
    title: "Students",
    dataIndex: "students",
    key: "students",
    render: (text, record) => (
      <S.ModalWrapper>
        <FlexWrapper justify="flex-start" align="flex-start">
          <img className="table__col-img" src={record.img} alt="student-img" />
          <p style={{ marginLeft: "15px" }}>{text}</p>
        </FlexWrapper>
      </S.ModalWrapper>
    ),
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    render: (text) => <p style={{ fontSize: "12px" }}>{text}</p>,
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status, record) => (
      <>
        <S.BtnWrapper>
          <B.PrimBtn onClick={() => btnHandler("present")}>Present</B.PrimBtn>
          <B.WarnBtn onClick={() => btnHandler("late")}>Late</B.WarnBtn>
          <B.DangerBtn onClick={() => btnHandler("absent")}>Absent</B.DangerBtn>
        </S.BtnWrapper>
      </>
    ),
  },
  {
    title: "Note",
    key: "note",
    render: (text) => (
      <S.NoteText size="middle">
        <Popover content={<textarea></textarea>} trigger={["click"]}>
          {/* <Chat /> */}
        </Popover>
      </S.NoteText>
    ),
  },
];

const data = [
  {
    key: "1",
    students: "John Brown",
    time: "12:32 am",
    status: "",
    img: "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
  },
  {
    key: "2",
    students: "Jim Green",
    time: "10:54 pm",
    status: "",
    img: "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
  },
  {
    key: "3",
    students: "Joe Black",
    time: "11:32 am",
    status: "",
    img: "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
  },
];

function Attandance({ handler, isModal }) {
  const handleOk = () => {
    handler();
  };

  const handleCancel = () => {
    handler();
  };

  return (
    <>
      <C.RightButton style={{ margin: "0" }} onClick={handler}>
        New Attandance
      </C.RightButton>
      <Modal
        title="Create Attandance"
        visible={isModal}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
      >
        <Table columns={columns} dataSource={data} />
        <F.CreateButton onClick={handleOk}>Create</F.CreateButton>
      </Modal>
    </>
  );
}

export default Attandance;
