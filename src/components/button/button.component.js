import PropTypes from 'prop-types'

import { Button as Btn } from './button.styled'

const Button = (props) => {
  console.log('props : ',props)
  return (
    <Btn {...props} onClick={props.disable ? () => {} : props.onClick}>
      {props.children}
    </Btn>
  )
}

Button.defaultProps = {
  style: {},
  color: 'blue',
  disable: false,
  onClick: () => {},
}
Button.propTypes = {
  onClick: PropTypes.func,
  disable: PropTypes.bool,
  style: PropTypes.object,
  color: PropTypes.string,
}

export default Button
