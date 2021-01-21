import React from 'react';
import { Link } from 'gatsby'
import { FlexWrapper } from "../../styles/index";
// import S from '../../styles/button'
// import { ReactComponent as EditeBtn} from '../../assets/img/svg/edite.svg'

import { Table } from 'antd';

// const { WarnBtn } = S

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
        title: 'Instructor Name',
        dataIndex: 'instructorName',
        key: 'instructorName',
        render: (text, record) => (
            <FlexWrapper justify="flex-start" align="center">
                <img style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                }} className="table__col-img" src={record.img} alt="instuctor-img" />
                <div>
                    <Link to='/instructor' style={{ marginLeft: "15px", marginBottom: '0' }}>{text}</Link>
                    <p style={{ color: '--main-green' }}>{record.groups}</p>
                </div>

            </FlexWrapper>
        ),
    },
    {
        title: 'Students',
        key: 'students',
        dataIndex: 'students',
    },
    {
        title: 'Courses',
        key: 'courses',
        dataIndex: 'courses',
    },
    {
        title: 'Days',
        key: 'days',
        dataIndex: 'days',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Salary',
        dataIndex: 'salary',
        key: 'salary',
        render: (text) => (
            <p style={{ margin: '0', textAlign: 'center' }}>{text} so`m</p>
        )
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        // render: () => (
        //     <EditeBtn />
        // ),
    },
];

const data = [
    {
        key: '1',
        instructorName: 'John Brown',
        phone: "+998995568866",
        students: 9,
        img: "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
        courses: 1,
        salary: 5200000 ,
        days: "All days"
    },
    {
        key: '2',
        instructorName: 'Key Brown',
        phone: "+998995568866",
        students: 9,
        img: "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
        courses: 2,
        salary: 5200000 ,
        days: "Mn-Wd-Fr"
    },
    {
        key: '3',
        instructorName: 'Hey Brown',
        phone: "+998995568866",
        students: 9,
        img: "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
        courses: 4,
        salary: 5200000 ,
        days: "Mn-Wd-Fr"
    },
    {
        key: '4',
        instructorName: 'Yo Brown ',
        phone: "+998995568866",
        students: 9,
        img: "https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171__340.jpg",
        courses: 2,
        salary: 5200000 ,
        days: "Mn-Wd-Fr"
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