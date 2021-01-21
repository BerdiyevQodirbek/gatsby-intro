import React, { useRef, useState } from 'react';
import WebcamCapture from './webCam'
import Student from '../../styles/pages/student/index'
import User from "../../styles/forms/User";

import { Form, Input, Select } from 'antd';
import {
    CameraOutlined,
    MailOutlined,
    // UsergroupAddOutlined,
    // YoutubeOutlined,
    // SoundOutlined,
    EnvironmentOutlined
} from '@ant-design/icons'

const {
    StudentWrapper,
    CameraButton,
    UploadInput,
    UploadButton,
    CustomizedInput,
    CustomizedSelect,
    CreateButton,
    CancelButton,
} = Student

const { AddonInput, PasswordInput } = User

const { Option } = Select;
// const { RangePicker } = DatePicker;

//  Layouts for antd below

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
// const tailLayout = {
//     wrapperCol: { offset: 8, span: 16 },
// };


// Data for selectors

var dataSpecials = [
    { name: 'IELTS' },
    { name: 'Math' },
    { name: 'Grammar' },
]


function AddInstructor() {
    const [WebCam, setWebCam] = useState(false)
    const [image, setImage] = useState('')
    // const [InstructorName, setInstructorName] = useState('')
    // const [Phone, setPhone] = useState('')
    // const [BirthDate, setBirthDate] = useState('')
    const [Speciality, setSpeciality] = useState('')
    const refInput = useRef(null)


    const onFinish = values => {
        const valls = values;
        console.log(Speciality);
        console.log('Success:', valls);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const uploadHandler = () => {
        console.log(refInput);
        refInput.current.click()
    }

    const isWebCame = () => {
        setWebCam(!WebCam)
    }

    const Url = imgUrl => {
        console.log(imgUrl);
        setImage(imgUrl)
    }


    return (
        <React.Fragment>
            {WebCam ? (<WebcamCapture fileUrl={Url} hideModal={isWebCame} />) : ''}
            <StudentWrapper className="add">
                <h4 className="add__title">Create Student</h4>
                <div className="add__upload-img">
                    <CameraButton onClick={isWebCame} className="add__CameraButton">
                        <CameraOutlined />
                    </CameraButton>
                    <UploadInput type='file' ref={refInput} />
                    <UploadButton onClick={uploadHandler}>Upload Profile pic</UploadButton>
                    {image}
                </div>
                <div className="add__form-wrapper">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <CustomizedInput className="firstCustimized">
                            <Form.Item
                                name="StudentName"
                                rules={[
                                    { required: true, message: "Please input Full name!" },
                                ]}
                            >
                                <Input placeholder="Full name" />
                            </Form.Item>
                        </CustomizedInput>
                        <div className="add__d-flex">
                            <CustomizedInput>
                                <Form.Item
                                    name="Phone"
                                    rules={[{ required: true, message: 'Please input Phone number!' }]}
                                >
                                    <Input placeholder='Phone' />
                                </Form.Item>

                            </CustomizedInput>
                            <CustomizedSelect>
                                <Form.Item
                                    name="Speciality"
                                    rules={[{ required: true, message: 'Please select Speciality number!' }]}
                                >
                                    <Select
                                        placeholder="Speciality"
                                        name="Speciality"
                                        onChange={(e) => setSpeciality(e ? e : '')}
                                        allowClear
                                    >
                                        {dataSpecials.map((item, index) => {
                                            return (<Option key={index} value={item.name}>{item.name}</Option>)
                                        })}

                                    </Select>

                                </Form.Item>
                            </CustomizedSelect>
                        </div>
                        <AddonInput>
                            <span className="addon">
                                <EnvironmentOutlined />
                            </span>
                            <Form.Item
                                name="Adress"
                                rules={[{ required: true, message: "Please input Adress!" }]}
                            >
                                <Input type="text" placeholder="Adress" />
                            </Form.Item>
                        </AddonInput>
                        <AddonInput>
                            <span className="addon">
                                <MailOutlined />
                            </span>
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: "Please input Email!" }]}
                            >
                                <Input type="email" placeholder="Email" />
                            </Form.Item>
                        </AddonInput>
                        <PasswordInput>
                            <Form.Item
                                name="password"
                                rules={[
                                    { required: true, message: "Please input Password!" },
                                ]}
                            >
                                <Input.Password type="password" placeholder="Password" />
                            </Form.Item>
                        </PasswordInput>
                        <PasswordInput>
                            <Form.Item
                                name="password"
                                rules={[
                                    { required: true, message: "Please input Password!" },
                                ]}
                            >
                                <Input.Password type="password" placeholder="Reset Password" />
                            </Form.Item>
                        </PasswordInput>
                        <div className='add__d-flex'>
                            <CancelButton style={{width: 'calc(100% - 10px)', marginRight: 10 }}>Cancel</CancelButton>
                            <CreateButton type='reset'>Create</CreateButton>
                        </div>
                    </Form>
                </div>
            </StudentWrapper>
        </React.Fragment>
    );
}

export default AddInstructor;