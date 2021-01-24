import React, { useRef, useState } from 'react';
import WebcamCapture from './webCame'
import S from '../../styles/pages/student/index'
import Layout from '../../components/layout'
import { Form, Input, Radio, DatePicker, Select , Checkbox} from 'antd';
import {
    CameraOutlined,
    UsergroupAddOutlined,
    YoutubeOutlined,
    SoundOutlined,
} from '@ant-design/icons'



const { Option } = Select;
const { RangePicker } = DatePicker;

//  Layouts for antd below

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
// const tailLayout = {
//     wrapperCol: { offset: 8, span: 16 },
// };


// Configs for antd below

const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
};

const rangeConfig = {
    rules: [{ type: 'array', required: true, message: 'Please select time!' }],
};



// Data for selectors

var dataSubjects = [
    { name: 'IELTS' },
    { name: 'Math' },
    { name: 'Grammar' },
]

var dataGroups = [
    {
        name: 'Math elementary',
        weekdays: 'Mn-Wd-Fr',
        time: '11:00 - 13:00'
    },

    {
        name: 'Math pre',
        weekdays: 'Mn-Wd-Fr',
        time: '11:00 - 13:00'
    },

    {
        name: 'Math advance',
        weekdays: 'Mn-Wd-Fr',
        time: '11:00 - 13:00'
    },

]



function AddStudent() {
    const [WebCam, setWebCam] = useState(false)
    const [image, setimage] = useState('')
    // const [StudentName, setStudentName] = useState('')
    // const [Phone, setPhone] = useState('')
    // const [BirthDate, setBirthDate] = useState('')
    // const [Subject, setSubject] = useState('')
    // const [Group, setGroup] = useState('')
    // const [Time, setTime] = useState('')
    const [Suggesed, setSuggesed] = useState(0)
    const [WeekDays, setWeekDays] = useState([])
    const refInput = useRef(null)


    const onFinish = values => {
        const valls = values;
        valls.sugessed = Suggesed
        console.log('Success:', valls, image, arr);
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
        setimage(imgUrl)
    }

    let arr = []
    const weekDaysHandler = (e) => {
        var day = e.target.value;
        var IsChecked = e.target.checked;
        IsChecked ? arr.push(day) 
        : arr = arr.filter(item => item !== day)
        setWeekDays([...WeekDays, ...arr])
        
    }
    
    
    console.log(WeekDays);
    return (
        <Layout>
            {WebCam ? (<WebcamCapture fileUrl={Url} hideModal={isWebCame} />) : ''}
            <S.StudentWrapper className="add">
                <h4 className="add__title">Create Student</h4>
                <div className="add__upload-img">
                    <S.CameraButton onClick={isWebCame} className="add__CameraButton">
                        <CameraOutlined />
                    </S.CameraButton>
                    <S.UploadInput type='file' ref={refInput}></S.UploadInput>
                    <S.UploadButton onClick={uploadHandler}>Upload  Profile pic</S.UploadButton>
                </div>
                <div className="add__form-wrapper">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <S.CustomizedInput className="firstCustimized">
                            <Form.Item
                                name="StudentName"
                                rules={[{ required: true, message: 'Please input Full name!' }]}
                            >
                                <Input placeholder='Full name' />
                            </Form.Item>

                        </S.CustomizedInput>
                        <div className="add__d-flex">
                            <S.CustomizedInput>
                                <Form.Item
                                    name="Phone"
                                    rules={[{ required: true, message: 'Please input Phone number!' }]}
                                >
                                    <Input placeholder='Phone' />
                                </Form.Item>

                            </S.CustomizedInput>
                            <S.CustomizedInput>
                                <Form.Item name="date-picker" {...config}>
                                    <DatePicker />
                                </Form.Item>
                            </S.CustomizedInput>

                        </div>
                        <div className="add__d-flex">
                            <S.CustomizedSelect>
                                <Form.Item
                                    name="Subject"
                                    rules={[{ required: true, message: 'Please input Phone number!' }]}
                                >
                                    <Select
                                        placeholder="Select Subject"
                                        name="Subject"
                                        // onChange={(e) => setSubject(e ? e : '')}
                                        allowClear
                                    >
                                        {dataSubjects.map((item, index) => {
                                            return (<Option key={index} value={item.name}>{item.name}</Option>)
                                        })}

                                    </Select>

                                </Form.Item>
                            </S.CustomizedSelect>
                            <S.CustomizedSelect>
                                <Form.Item
                                    name="Group"
                                    rules={[{ required: true, message: 'Please input Phone number!' }]}
                                >
                                    <Select
                                        placeholder="Select existing group"
                                        name="Group"
                                        // onChange={(e) => setGroup(e ? e : '')}
                                        allowClear
                                    >
                                        {dataGroups.map((item, index) => {
                                            return (<><Option key={index} value={item.name}>{item.name}
                                            </Option>
                                                <Option disabled style={{ borderBottom: '1px solid lightgrey', fontSize: '12px', paddingTop: '0' }}> {item.time} | {item.weekdays}</Option>
                                            </>
                                            );
                                        })}
                                        <Option value='add to pending room'>Add to pending room</Option>
                                    </Select>
                                </Form.Item>

                            </S.CustomizedSelect>
                        </div>
                        <div className="add__d-flex">
                            <S.CustomizedInput>
                                <Form.Item
                                    name="Adress"
                                    rules={[{ required: true, message: 'Please input Adress!' }]}
                                >
                                    <Input type='tel' placeholder='Adress' />
                                </Form.Item>
                            </S.CustomizedInput>
                            <S.CustomizedInput>
                                <Form.Item name="Time" {...rangeConfig}>
                                    <RangePicker showTime format="HH:mm:ss" />
                                </Form.Item>

                            </S.CustomizedInput>
                        </div>
                        <div className='weekDays'>
                            <h2>Lesson days</h2>
                            <div>
                                <Checkbox value='Mon' onChange={(e) => weekDaysHandler(e)}>Mon</Checkbox>
                                <Checkbox value='Tue' onChange={(e) => weekDaysHandler(e)}>Tue</Checkbox>
                                <Checkbox value='Wed' onChange={(e) => weekDaysHandler(e)}>Wed</Checkbox>
                                <Checkbox value='Thur' onChange={(e) => weekDaysHandler(e)}>Thur</Checkbox>
                                <Checkbox value='Fri' onChange={(e) => weekDaysHandler(e)}>Frid</Checkbox>
                                <Checkbox value='Sat' onChange={(e) => weekDaysHandler(e)}>Sat</Checkbox>
                                <Checkbox value='Sun' onChange={(e) => weekDaysHandler(e)}>Sun</Checkbox>
                            </div>
                        </div>
                        <S.CheckboxGroup>
                            <h1>Who does he/she hear that from?</h1>
                            <Radio.Group onChange={(e) => setSuggesed(e.target.value)}>
                                <label className={Suggesed !== 1 ? 'label-wrapper' : 'label-wrapper checked'}>
                                    <Radio key='1' value={1}></Radio>
                                    <span className='check-style'>
                                        <UsergroupAddOutlined />
                                    Friend
                                </span>
                                </label>
                                <label className={Suggesed !== 2 ? 'label-wrapper' : 'label-wrapper checked'}>
                                    <Radio key='2' value={2}></Radio>
                                    <span className='check-style'>
                                        <YoutubeOutlined />
                                    Social Media
                                </span>
                                </label>
                                <label className={Suggesed !== 3 ? 'label-wrapper' : 'label-wrapper checked'}>
                                    <Radio key='3' value={3}></Radio>
                                    <span className='check-style'>
                                        <SoundOutlined />
                                    Outdoor  advertisement
                                </span>
                                </label >
                            </Radio.Group>
                        </S.CheckboxGroup>

                        <S.CreateButton   >
                            Create
                         </S.CreateButton>
                    </Form>
                </div>
            </S.StudentWrapper>
        </Layout>
    );
}

export default AddStudent;