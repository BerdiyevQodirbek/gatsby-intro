import React from 'react';
import {Link} from 'gatsby'
import { FlexWrapper } from "../../styles/index";
import S from '../../styles/button'

import { Table } from 'antd';

const {WarnBtn} = S 

const columns = [
    {
        title: '',
        dataIndex: 'key',
        key: 'number',
        render: text => (
            <p style={{margin: '0', textAlign: 'center'}}>{text}</p>
        )
    },
    {
        title: 'Group Name',
        dataIndex: 'groupName',
        key: 'groupName',
        render: (text, record) => (
            <FlexWrapper justify="flex-start" align="center">
                <img style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                }} className="table__col-img" src={record.img} alt="student-img" />
                <Link to='info' style={{ marginLeft: "15px", marginBottom: '0' }}>{text}</Link>
            </FlexWrapper>
        ),
    },
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Weekdays',
        key: 'weekdays',
        dataIndex: 'weekdays',
    },
    {
        title: 'Students',
        key: 'students',
        dataIndex: 'students',
    },
    {
        title: 'Price',
        key: 'price',
        dataIndex: 'price',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: () => (
            <WarnBtn>Edite</WarnBtn>
        ),
    },
];

const data = [
    {
        key: '1',
        groupName: 'English ',
        time: "12:32 am",
        weekdays: 'Mn-Wd-Fr',
        img: "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
        students: 9,
        price: "150000"
    },
    {
        key: '2',
        groupName: 'Branding',
        time: "10:54 pm",
        weekdays: 'Mn-Tu-Wd',
        img: "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
        students: 12,
        price: "200000"
    },
    {
        key: '3',
        groupName: 'Graphic Design',
        time: "11:32 am",
        weekdays: 'Tu-Th-St',
        img: "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
        students: 10,
        price: "450000"
    },
];

function List(props) {
    return (
        <div style={{padding: '0 60px'}}>
            <Table bordered columns={columns} dataSource={data} />
        </div>
    );
}

export default List;