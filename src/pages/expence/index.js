import React from 'react';
import Layout from '../../components/layout';
import { Button } from "../../styles/button";
import S from "../../styles/pages/payment";
import { Switch, Table } from "antd";



function index(props) {


    const onSwitchChange = (e) => {
        console.log(e);
    };

    const columns = [
        {
            title: "",
            dataIndex: "key",
            key: "id",
            width: 30,
        },
        {
            title: "Reason",
            dataIndex: "reason",
            key: "reason",
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "Amount",
            dataIndex: "amount",
            key: "amount",
            render: (text) => <p> {text} UZS </p>,
        },

        {
            title: "Date",
            dataIndex: "createdAt",
            key: "createdAt",
        },
    ];

    const data = [
        {
            key: "1",
            reason: "Marker for english room",
            category: "Office supplies",
            amount: "230 000",
            createdAt: "09/02/21",
        },
        {
            key: "2",
            reason: "Paper",
            category: "Office supplies",
            amount: "50 000",
            createdAt: "19/02/21",
        },
        {
            key: "3",
            reason: "Notebook",
            category: "Office supplies",
            amount: "3 230 000",
            createdAt: "02/02/21",
        },
        {
            key: "4",
            reason: "Marker for english room",
            category: "Office supplies",
            amount: "230 000",
            createdAt: "09/02/21",
        },
        {
            key: "5",
            reason: "Marker for english room",
            category: "Office supplies",
            amount: "230 000",
            createdAt: "09/02/21",
        },
    ];
    return (
        <Layout>
            <S.Wrapper>
                <S.Nav>
                    <div className="nav__block">
                        <h3 className="nav__title">Expense</h3>
                        <p>01/01/2018 - 31/12/2018</p>
                    </div>
                    <div className="nav__block nav__block-right">
                        <div className="nav__switch">
                            <p className="nav__switch-label">Show debts</p>
                            <Switch onChange={onSwitchChange} />
                        </div>
                        <Button width="100px" status="pink">
                            New Expense
                        </Button>
                        <Button width="100px" status="blue">
                            Export as XLS
                    </Button>
                    </div>
                </S.Nav>
                <Table dataSource={data} columns={columns} />
            </S.Wrapper>
        </Layout>
    );
}

export default index;