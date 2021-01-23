import React from 'react';
import { Link } from 'gatsby'
import { FlexWrapper } from "../../styles/index";
import S from '../../styles/button'
import {StatusBtn} from '../../styles/index'

import { Table } from 'antd';

const { WarnBtn } = S

const columns = [
    {
        title: '',
        dataIndex: 'key',
        key: 'number',
        render: text => (
            <p style={{ margin: '0', textAlign: 'center' }}>{text}</p>
        )
    },
    {
        title: 'Student Name',
        dataIndex: 'studentName',
        key: 'studentName',
        render: (text, record) => (
            <FlexWrapper justify="flex-start" align="center">
                <img style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                }} className="table__col-img" src={record.img} alt="student-img" />
                <div>
                    <Link to='info' style={{ marginLeft: "15px", marginBottom: '0' }}>{text}</Link>
                    <p style={{ color: '--main-green' }}>{record.groups}</p>
                </div>

            </FlexWrapper>
        ),
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Date',
        key: 'date',
        dataIndex: 'date',
    },
    {
        title: 'Debt',
        key: 'debt',
        dataIndex: 'debt',
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (text) => (
            <StatusBtn 
            padding='10px 20px' 
            color={
                text == 'Studying' 
                ? '--main-green'
                : text == 'Complited' 
                ? '--accent-color'
                : '--danger-status-color'
            } >
                <span>{text}</span>
            </StatusBtn>
                
        )

    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: () => (
            <WarnBtn>☼</WarnBtn>
        ),
    },
];

const data = [
    {
        key: '1',
        studentName: 'John Brown',
        phone: "995568866",
        date: 'Mn-Wd-Fr',
        img: "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
        debt: 9000,
        status: "Studying"
    },
    {
        key: '2',
        studentName: 'Key Brown',
        phone: "995568866",
        date: 'Mn-Tu-Wd',
        img: "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
        debt: 10002,
        status: "Left"
    },
    {
        key: '3',
        studentName: 'Hey Brown',
        phone: "995568866",
        date: 'Tu-Th-St',
        img: "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
        debt: 10000,
        status: "Studying"
    },
    {
        key: '4',
        studentName: 'Yo Brown ',
        phone: "995568866",
        date: 'Tu-Th-St',
        img: "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
        debt: 10000,
        status: "Complited"
    },
];

function List(props) {
    return (
        <div style={{ padding: '0 60px' }}>
            <Table bordered columns={columns} dataSource={data} />
        </div>
    );
}

export default List;