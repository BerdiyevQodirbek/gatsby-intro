import React, { useState } from 'react';
import S from '../../styles/pages/student'
import F from '../../styles/forms/User'
import { Modal, Form, Input, Select, DatePicker } from 'antd';

import {
    PayCircleOutlined,
} from '@ant-design/icons'

const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
};

const { Option } = Select;

const {
    StudentWrapper,
    CustomizedInput,
    CustomizedSelect,
} = S
const {
    CreateButton,
    AddonInput,

} = F;

//  Layouts for antd below

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


const dataStudents = [
    { name: 'Sulton' },
    { name: 'Muhlisa' },
    { name: 'Ibrohim' },
]



function Create({ isModal, isModalHandler }) {

    const [GroupName, setGroupName] = useState('')
    const [Students, setStudents] = useState([])
    const [Instructor, setInstructor] = useState('')
    const [Time, setTime] = useState('')



    const onFinish = values => {
        const valls = values;
        console.log('Success:', valls);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const handleOk = () => {
        isModalHandler()
    };

    const handleCancel = () => {
        isModalHandler()
    };


    return (
        <StudentWrapper className="add">
            <Modal className='modall' title={'Update Group'} visible={isModal} onOk={handleOk} onCancel={handleCancel}>
                <div className="add__form-wrapper">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <AddonInput>
                            <span className='addon'>
                                <PayCircleOutlined />
                            </span>
                            <Form.Item
                                name="groupName"
                                rules={[{ required: true, message: 'Please input Group Name!' }]}
                                initialValue={GroupName}
                            >
                                <Input type='number' placeholder='Amount' onChange={(e) => setGroupName(e.target.value)} />
                            </Form.Item>
                        </AddonInput>
                        <CustomizedSelect>
                            <Form.Item
                                name="students"
                                rules={[{ required: true, message: 'Please select Student!' }]}
                                initialValue={Students}
                            >
                                <Select
                                    placeholder="Group Name"
                                    name="student"
                                    onChange={(e) => setStudents(e ? e : '')}
                                    allowClear
                                >
                                    {dataStudents.map((item, index) => {
                                        return (<Option key={index} value={item.name}>{item.name}</Option>)
                                    })}
                                </Select>

                            </Form.Item>
                        </CustomizedSelect>
                        <CustomizedInput>
                                <Form.Item name="date-picker" {...config}>
                                    <DatePicker />
                                </Form.Item>
                            </CustomizedInput>
                        <CreateButton>
                            Update
                        </CreateButton>
                    </Form>
                </div>
            </Modal>
        </StudentWrapper>
    );
}

export default Create;