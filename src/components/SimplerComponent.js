// Code SimplerComponent Here
import React from 'react';

handleClick = () => {
  console.log(props)
}

const SimplerComponent = props => <div onClick={props.handleClick}>I am just happy</div>

export default SimplerComponent;
