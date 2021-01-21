import React, { useState } from 'react';
import S from '../../styles/pages/student/index'
import F from '../../styles/forms/User'
import { Modal, Form, Input, Button, Select, Radio, Checkbox } from 'antd';

import {
    PayCircleOutlined,
    CreditCardOutlined,
    BankOutlined,
} from '@ant-design/icons'



const { Option } = Select;

const {
    StudentWrapper,
    CustomizedInput,
    CustomizedSelect,
    CheckboxGroup,
} = S
const {
    CreateButton,
    AddonInput,
    CustimizedTextArea,

} = F;

//  Layouts for antd below

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


const dataStudents = [
    {name: 'Sulton'},
    {name: 'Muhlisa'},
    {name: 'Ibrohim'},
]


const data = {
    student: 'fazliddinov Abdusamat Mirabbosovich',
    // type: 2,
    amount: 120000,
    left: 200000,
    isdebt: true,
}



function Update() {

    const {
        student,
        // type,
        amount,
        left,
        isdebt,
    } = data

    // const [typePayment, setTypePayment] = useState(type)
    const [Student, setStudent] = useState(student)
    const [Amount, setAmount] = useState(amount)
    const [Left, setLeft] = useState(left)
    const [isDebt, setisDebt] = useState(isdebt)
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onFinish = values => {
        const valls = values;
        valls.student = Student
        valls.isdebt = isDebt
        console.log('Success:', valls);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <StudentWrapper className="add">
            <Button type="primary" className='CreateUser' onClick={showModal}>
                Update Payment
            </Button>
            <Modal className='modall' title={'Update Payment'} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className="add__form-wrapper">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >

                            <CheckboxGroup>
                                <Radio.Group onChange={(e) => setStudent(e.target.value)} value={Student}>
                                    <label className={Student !== 1 ? 'label-wrapper' : 'label-wrapper checked'}>
                                        <Radio value={1}></Radio>
                                        <span className='check-style'>
                                        <CreditCardOutlined />
                                    Card
                                </span>
                                    </label>
                                    <label className={Student !== 2 ? 'label-wrapper' : 'label-wrapper checked'}>
                                        <Radio value={2}></Radio>
                                        <span className='check-style'>
                                            <PayCircleOutlined/>
                                    Cash
                                </span>
                                    </label>
                                    <label className={Student !== 3 ? 'label-wrapper' : 'label-wrapper checked'}>
                                        <Radio value={3}></Radio>
                                        <span className='check-style'>
                                        <BankOutlined />
                                    Other
                                </span>
                                    </label>
                                </Radio.Group>
                            </CheckboxGroup>

                        
                        <CustomizedSelect>
                            <Form.Item
                                name="Student"
                                rules={[{ required: true, message: 'Please select Student!' }]}
                                initialValue={Student}
                            >
                                <Select
                                    placeholder="Student"
                                    name="Student"
                                    onChange={(e) => setStudent(e ? e : '')}
                                    allowClear
                                >
                                    {dataStudents.map((item, index) => {
                                        return (<Option key={index} value={item.name}>{item.name}</Option>)
                                    })}
                                </Select>

                            </Form.Item>


                        </CustomizedSelect>
                        <AddonInput>
                            <span className='addon'>
                                <PayCircleOutlined />
                            </span>
                            <Form.Item
                                name="payment"
                                rules={[{ required: true, message: 'Please input Payment!' }]}
                                initialValue={Amount}
                                >
                                <Input type='number' onChange={setAmount} placeholder='Amount' />
                            </Form.Item>
                        </AddonInput>
                        <CustomizedInput>
                            <Form.Item
                                name="left"
                                rules={[{ required: true, message: 'Please input Left SUM!' }]}
                                initialValue={Left}
                            >
                                <Input type='number' setLeft={setLeft} placeholder='Left' />
                            </Form.Item>

                        </CustomizedInput>
                        <CustimizedTextArea>
                            <Form.Item
                                name='note'>
                                <Input.TextArea />
                            </Form.Item>
                        </CustimizedTextArea>
                        <Checkbox  onChange={() => setisDebt(!isDebt)}>Mark as paid</Checkbox>
                        <CreateButton>
                            Update
                        </CreateButton>
                    </Form>
                </div>
            </Modal>
        </StudentWrapper>
    );
}

export default Update;