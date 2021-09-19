import React from 'react';
import Card from '../../components/ui/Card';
import { Breadcrumb } from 'antd';
import { HomeOutlined, BookOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export default function AssignmentThree() {

    return (
        <div className="container">
            <div style={{ marginTop: 20, marginBottom: 20, marginLeft: 5 }}> 
                <Breadcrumb>
                    <Breadcrumb.Item href="/">
                        <HomeOutlined /> Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item><BookOutlined /> Assignment Three</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className="" style={{ marginTop: 10, marginBottom: 10 }}>
                <Card>
                    Assignment Three
                </Card>
            </div>
        </div>
    )
}
