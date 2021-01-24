import React, { useState } from 'react';
import User from '../../styles/forms/User'
import S from '../../styles/pages/student'
import { Modal, Form, Input, Select, DatePicker } from 'antd';

import {
    PayCircleOutlined,
} from '@ant-design/icons'

const { RangePicker } = DatePicker;

const rangeConfig = {
    rules: [{ type: 'array', required: true, message: 'Please select time!' }],
};

const { Option } = Select;

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
    // const [Instructor, setInstructor] = useState('')
    // const [Time, setTime] = useState('')



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
        <S.StudentWrapper className="add">
            <Modal className='modall' title={'Create Group'} visible={isModal} onOk={handleOk} onCancel={handleCancel}>
                <div className="add__form-wrapper">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <User.AddonInput>
                            <span className='addon'>
                                <PayCircleOutlined />
                            </span>
                            <Form.Item
                                name="groupName"
                                rules={[{ required: true, message: 'Please input Group Name!' }]}
                                initialValue={GroupName}
                            >
                                <Input type='number' placeholder='Group Name' onChange={(e) => setGroupName(e.target.value)} />
                            </Form.Item>
                        </User.AddonInput>
                        <S.CustomizedSelect>
                            <Form.Item
                                name="instructor"
                                rules={[{ required: true, message: 'Please select Instructor!' }]}
                                initialValue={Students}
                            >
                                <Select
                                    placeholder="Instructor"
                                    name="instructor"
                                    onChange={(e) => setStudents(e ? e : '')}
                                    allowClear
                                >
                                    {dataStudents.map((item, index) => {
                                        return (<Option key={index} value={item.name}>{item.name}</Option>)
                                    })}
                                </Select>

                            </Form.Item>
                        </S.CustomizedSelect>
                        <S.CustomizedInput>
                                <Form.Item name="Time" {...rangeConfig}>
                                    <RangePicker showTime format="HH:mm:ss" />
                                </Form.Item>

                            </S.CustomizedInput>
                        <User.CreateButton>
                            Create
                        </User.CreateButton>
                    </Form>
                </div>
            </Modal>
        </S.StudentWrapper>
    );
}

export default Create;