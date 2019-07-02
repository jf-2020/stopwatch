import React from 'react';

const bClass = "waves-effect waves-light btn-large";
const bStyle = {
    margin: '10px'
};

const Button = (props) => {
    return (
        <button className={bClass}
            name={props.name}
            style={bStyle}
            onClick={props.onClick}
        >{props.name}</button>
    );
}

export default Button;