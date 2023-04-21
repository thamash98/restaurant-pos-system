import React from 'react'
import Style from './Button.module.css'

const Button = (props) => {
  return (
    <button type={props.type}>
      {props.children}
    </button>
  );
}

export default Button;