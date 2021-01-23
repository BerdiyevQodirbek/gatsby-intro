import React from 'react'
import { Table, Badge, Menu, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import S from '../../styles/button'
const { PrimBtn, WarnBtn, DangerBtn } = S
const menu = (
    <Menu>
        <Menu.Item>
            <WarnBtn style={{margin: '0'}}>
                Change
            </WarnBtn>
        </Menu.Item>
        <Menu.Item>
            <DangerBtn>
                Delete
            </DangerBtn>
        </Menu.Item>
    </Menu>
);

function NestedTable() {
    const expandedRowRender = () => {
        const columns = [
            { title: 'Name :', dataIndex: 'name', key: 'name' },
            { title: 'Type :', dataIndex: 'type', key: 'type' },
            { title: 'Time :', dataIndex: 'time', key: 'time' },
            {
                title: 'Status :',
                key: 'state',
                render: () => (
                    <span>
                        <Badge status="success" />
                        Waiting
                    </span>
                ),
            },
            { title: 'Tell Number :', dataIndex: 'tellNum', key: 'tellNum' },
            {
                title: 'Action',
                dataIndex: 'operation',
                key: 'operation',
                render: () => (
                    <Space size="middle">
                        <Dropdown overlay={menu}>
                            <p>
                                More <DownOutlined />
                            </p>
                        </Dropdown>
                    </Space>
                ),
            },
        ];

        const data = [
            {
                key: 1,
                name: 'Mohirabonu',
                type: 'intermediate',
                tellNum: '99 555 88 77',
                time: '10:00 - 12:00',
            },
            {
                key: 2,
                name: 'Ahmadjon',
                type: 'intermediate',
                tellNum: '99 555 88 77',
                time: '10:00 - 12:00',
            },
            {
                key: 3,
                name: 'Abubakir',
                type: 'intermediate',
                tellNum: '99 555 88 77',
                time: '10:00 - 12:00',
            },
        ];
        return <Table columns={columns} dataSource={data} pagination={false} />;
    };

    const columns = [
        { title: 'Group Name', dataIndex: 'groupName', key: 'groupName' },
        { title: 'Time', dataIndex: 'time', key: 'time' },
        {
            title: 'Create', key: 'operation', render: () =>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <PrimBtn>Create</PrimBtn>
                </div>
        },
    ];

    const data = [
        {
            key: 1,
            groupName: 'English',
            time: '10:00 - 12:00',
        },
        {
            key: 2,
            groupName: 'IELTS',
            time: '10:00 - 12:00',
        },
        {
            key: 3,
            groupName: 'Math',
            time: '14:00 - 16:00',
        },

    ];

    return (
        <Table
            className="components-table-demo-nested"
            columns={columns}
            expandable={{ expandedRowRender }}
            dataSource={data}
        />
    );
}

export default NestedTable;