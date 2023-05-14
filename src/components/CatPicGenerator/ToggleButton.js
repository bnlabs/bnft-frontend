import React, { useState } from "react";
import ReactSwitch from 'react-switch';

const ToggleButton = (props) => {
    const [toggle, setToggle] = useState(false);

    const handleChange = val => {
        setToggle(val);
        props.func();
    };

    return <ReactSwitch 
        checked={toggle}
        onChange={handleChange}/>
};

export default ToggleButton;