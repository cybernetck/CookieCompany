import React from 'react';

//var elem = document.querySelector('.fixed-action-btn');
//var instance = M.FloatingActionButton.init(elem, options);
const Button = (props) => (
    <div>
         <button onClick={props.handler}> {props.children} </button>
    </div>
)

export default Button;