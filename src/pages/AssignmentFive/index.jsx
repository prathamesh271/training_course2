import React from 'react';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../../redux/counter/counterSlice';
import Card from '../../components/ui/Card';
import { Breadcrumb } from 'antd';
import { HomeOutlined, BookOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export default function AssignmentFive() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    console.log('Count is', count);

    return (
        <div className="container">
            <div style={{ marginTop: 20, marginBottom: 20, marginLeft: 5 }}> 
                <Breadcrumb>
                    <Breadcrumb.Item href="/">
                        <HomeOutlined /> Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item><BookOutlined /> Assignment Five</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className="" style={{ marginTop: 10, marginBottom: 10 }}>
                <Card>
                    <div>
                        <h2 style={{ textAlign: 'center' }}>Counter using React Redux</h2>
                        <hr/>
                        <p style={{ textAlign: 'center', marginTop: 50 }}>
                            <Button 
                                type="button"
                                aria-label="Decrement value" 
                                onClick={() => dispatch(decrement())}>-</Button>
                            <span style={{ marginLeft: 10, marginRight: 10, fontSize: 18 }}>count is: {count}</span>
                            <Button 
                                type="button"
                                aria-label="Increment value" 
                                onClick={() => dispatch(increment())}>+</Button>
                        </p>
                        <p style={{ textAlign: 'center' }}>
                            <Button 
                                type="button"
                                aria-label="Reset value" 
                                onClick={() => dispatch(reset(0))}>Reset
                            </Button>
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    )
}
