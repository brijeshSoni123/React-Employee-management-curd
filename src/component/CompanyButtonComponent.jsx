import React from 'react'

export default function CompanyButtonComponent(props) {
  return (
    <div>
        <button style={props.style} onClick = {props.handleButtonClick}>
            {props.caption}
        </button>
    </div>
  )
}
