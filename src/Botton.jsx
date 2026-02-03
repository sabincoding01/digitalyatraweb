import React from 'react'
import PropTypes from 'prop-types'

const Botton = (props) => {
    console.log(props)
  return (
    <button>{props.name}</button>
  )
}

Button.defaultProps = {
    name:"sabin"
}

Button.propTypes = {
    name:PropTypes.string
}
export default Botton