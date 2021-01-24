import React, { useRef, useState } from "react";
import S from "../../styles/pages/student";
import F from "../../styles/forms/User";
import C from "../../styles/pages/center/index";
import {
  Modal,
  Form,
  Input,
  message,
  Button,
  Select,
  Radio,
  Checkbox,
} from "antd";

import {
  PayCircleOutlined,
  CreditCardOutlined,
  BankOutlined,
} from "@ant-design/icons";

const { Option } = Select;

const { StudentWrapper, CustomizedInput, CustomizedSelect, CheckboxGroup } = S;

const { RightButton } = C;

const { CreateButton, AddonInput, CustimizedTextArea } = F;

//  Layouts for antd below

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function Create({ Data, paymentHandler, isPayment }) {
  const [typePayment, setTypePayment] = useState(0);
  const [Student, setStudent] = useState("");
  const [Amount, setAmount] = useState("");
  const [Left, setLeft] = useState("");
  const [isDebt, setisDebt] = useState(true);

  const onFinish = (values) => {
    const valls = values;
    valls.type = typePayment;
    console.log("Success:", valls);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleOk = () => {
    paymentHandler();
  };

  const handleCancel = () => {
    paymentHandler();
  };

  return (
    <>
      <StudentWrapper className="add" style={{display: isPayment ? 'block' : 'none'}} >
        <Modal
          className="modall"
          title={"Create Payment"}
          visible={isPayment}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="add__form-wrapper">
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <CheckboxGroup>
                <Radio.Group
                  onChange={(e) => setTypePayment(e.target.value)}
                  value={typePayment}
                >
                  <label
                    className={
                      typePayment !== 1
                        ? "label-wrapper"
                        : "label-wrapper checked"
                    }
                  >
                    <Radio value={1}></Radio>
                    <span className="check-style">
                      <CreditCardOutlined />
                      Card
                    </span>
                  </label>
                  <label
                    className={
                      typePayment !== 2
                        ? "label-wrapper"
                        : "label-wrapper checked"
                    }
                  >
                    <Radio value={2}></Radio>
                    <span className="check-style">
                      <PayCircleOutlined />
                      Cash
                    </span>
                  </label>
                  <label
                    className={
                      typePayment !== 3
                        ? "label-wrapper"
                        : "label-wrapper checked"
                    }
                  >
                    <Radio value={3}></Radio>
                    <span className="check-style">
                      <BankOutlined />
                      Other
                    </span>
                  </label>
                </Radio.Group>
              </CheckboxGroup>

              <CustomizedSelect>
                <Form.Item
                  name="student"
                  rules={[
                    { required: true, message: "Please select Student!" },
                  ]}
                  initialValue={Student}
                >
                  <Select
                    placeholder="Select a Student"
                    name="student"
                    onChange={(e) => setStudent(e ? e : "")}
                    allowClear
                  >
                    {Data.map((item, index) => {
                      return (
                        <Option key={index} value={item.name}>
                          {item.name}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </CustomizedSelect>
              <AddonInput>
                <span className="addon">
                  <PayCircleOutlined />
                </span>
                <Form.Item
                  name="amount"
                  rules={[{ required: true, message: "Please input Payment!" }]}
                  initialValue={Amount}
                >
                  <Input
                    type="number"
                    placeholder="Amount"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </Form.Item>
              </AddonInput>
              <CustomizedInput>
                <Form.Item
                  name="left"
                  rules={[
                    { required: true, message: "Please input Left SUM!" },
                  ]}
                  initialValue={Left}
                >
                  <Input
                    type="number"
                    placeholder="Left"
                    onChange={(e) => setLeft(e.target.value)}
                  />
                </Form.Item>
              </CustomizedInput>
              <CustimizedTextArea>
                <Form.Item name="note">
                  <Input.TextArea />
                </Form.Item>
              </CustimizedTextArea>
              <Checkbox onChange={() => setisDebt(!isDebt)}>
                Mark as paid
              </Checkbox>
              <CreateButton>Create</CreateButton>
            </Form>
          </div>
        </Modal>
      </StudentWrapper>
    </>
  );
}

export default Create;
