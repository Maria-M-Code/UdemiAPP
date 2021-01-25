import React from 'react';



const product =  (props) => {
    return(
    <div>
        <p>{props.name} - {props.price}</p>
        <p>{props.children}</p>

    </div>        
    )

};

export default product;
