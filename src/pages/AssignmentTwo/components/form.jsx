import React from 'react';
import Card from '../../../components/ui/Card';
import { Formik, Form, Field } from 'formik';
import { TextField } from '../components/TextField'; 
import { Row, Col } from 'reactstrap';
import * as Yup from 'yup';
import './form.css';

function NewMeetupForm(props) {

    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('This field is Required'),
        lastName: Yup.string()
            .max(20, 'Must be 15 characters or less')
            .required('This field is Required'),
    })

    return(
        <div className="" style={{ marginTop: 10, marginBottom: 10 }}>
            <Formik
                initialValues={{ 
                    firstName: '', 
                    lastName: '',
                    role: '',
                }}
                validationSchema={validate}
                onSubmit={val => {
                    const temp = {...val, id:Math.random().toString()};
                    props.onSubmit(temp);
                }}
            >
                {formik => (
                    <Card className="card">
                        <div>
                            <h1>Formik Form</h1>
                            <hr/>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <TextField 
                                                label="First Name"
                                                name="firstName"
                                                type="text"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <TextField 
                                                label="Last Name"
                                                name="lastName"
                                                type="text"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="role">Role</label>
                                            <Field 
                                                as="select"
                                                name="role" 
                                                className="form-control">
                                                <option value="owner">Owner</option>
                                                <option value="user">User</option>
                                                <option value="admin">Admin</option>
                                            </Field>
                                        </div>
                                    
                                        <div className="btn-wrapper">
                                            <button type="submit" className="btn btn-primary" >Add</button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Card>
                )}
            </Formik>
        </div>
    )
}

export default NewMeetupForm;