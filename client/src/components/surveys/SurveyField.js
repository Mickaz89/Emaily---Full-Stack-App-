import React from "react";
import { Input } from 'antd';


export default ({input, placeholder, meta ,meta:{error, touched}}) => {
    console.log("ERRORS FIELD " ,error);
    return (
        <div>
            <Input
                {...input}
                placeholder={placeholder}
            />
            <div style ={{marginTop: "10px"}}>
                { touched && error}
            </div>
        </div>
    );
};
