import React from 'react';



const button = (props) => (
    <button
        disabled={props.disabled}
        className={["Button", props.btnType].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;