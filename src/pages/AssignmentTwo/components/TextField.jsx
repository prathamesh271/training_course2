import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <div className="input-field">
            <label htmlFor={field.name}>{label}</label>
            <input 
                type="text"
                className={ `form-control ${meta.touched && meta.error && `is-invalid`}`}
                autoComplete="off"
                {...field} {...props}
                />
                <ErrorMessage name={field.name} />
        </div>
    )
}