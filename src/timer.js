import React from 'react';

const Timer = (props) => {
    // const date = props.time;
    // const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const time = props.time;

    return (
        // <p>{time}</p>
        <h1>{time}</h1>
    );
}

export default Timer;