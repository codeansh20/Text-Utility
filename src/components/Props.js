import React from 'react'
import PropTypes from 'prop-types'
export default function Props(props) {
  return (
     <>
     <div className={`container text-${props.text}`}>
     <h2>{props.title}</h2>  
     <p>{props.content}</p>
     </div>
     </>
  )
}
Props.propTypes={
    title:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired
}
Props.defaultProps=
{
    title:"This is good",
}

// There is still things left to unerstand props completely till now learn basic of it