import { useState } from 'react';
import Form from "./components/form";
import DisplayUser from './components/displayUser';
import 'antd/dist/antd.css';

export default function UserList() {
    const [data, setData] = useState([]);

    const submitHandler = (temp) => {
        setData((prevData) => {return [temp, ...prevData]});
    }

    console.log('Display Data:', data);
    
    return (
        <div className="container">
            <Form onSubmit={submitHandler} />
            <div>
                <div className="row">
                    {data.map((lists) => {
                        return (
                            <DisplayUser 
                                key={lists.id}
                                firstName={lists.firstName}
                                lastName={lists.lastName}
                                role={lists.role}
                            />
                        )                        
                    }) }
                </div>
            </div>
            {/* <h4>{console.log('Display Data:', data)}</h4> */}
        </div>
    )
}
