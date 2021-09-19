import React from 'react';
import { Table, Tag, Space } from 'antd';
import Card from '../../components/ui/Card';
import { Breadcrumb } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export default function AssignmentOne() {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="/">{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a href="/">Invite {record.name}</a>
                    <a href="/">Delete</a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    return (
        <div className="container">
            <div style={{ marginTop: 20, marginBottom: 20, marginLeft: 5 }}> 
                <Breadcrumb>
                    {/* <Breadcrumb.Item href="/">
                        <HomeOutlined /> Home
                    </Breadcrumb.Item> */}
                    <Breadcrumb.Item><BookOutlined /> Assignment One</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            
            <div className="" style={{ marginTop: 10, marginBottom: 10 }}>
                <Card>
                    <Table columns={columns} dataSource={data} />
                </Card>
            </div>
        </div>
    )
}
