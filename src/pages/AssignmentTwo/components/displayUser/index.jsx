import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../form.css';
import 'antd/dist/antd.css';

export default function UserItem(props) {
    const { firstName, lastName, role } = props;
    
    return (
        <div className="col-md-4">
            <div className="card" style={{ padding: 0 }}>
                <div className="card-body">
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Avatar size={64} icon={<UserOutlined />} />
                    </div>
                    <div style={{ marginTop: 5, display: 'flex', justifyContent: 'center' }}>
                        <p style={{ marginBottom: 0, textAlign: 'center' }}>
                            <span style={{ fontWeight: 'bold' }}>First Name:</span> {firstName}</p>
                        <p style={{ marginBottom: 0, textAlign: 'center', marginLeft: 20 }}>
                            <span style={{ fontWeight: 'bold' }}>Last Name:</span> {lastName}</p>
                    </div>
                </div>
                <div className="card-footer">
                    <p style={{ marginBottom: 0, textAlign: 'center' }}>
                        <span style={{ fontWeight: 'bold' }}>Role:</span> {role}</p>
                </div>
            </div>
        </div>
    )
}
