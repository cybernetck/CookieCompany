import React from 'react';

const Button = (props) => (
    <div>
         <button onClick={props.handler}> {props.children} </button>
    </div>
)

export default Button;