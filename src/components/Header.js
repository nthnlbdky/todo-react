import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' text='Hello'/>
            <Button text='Higher'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
  }
  
Header.propTypes = {
    title: PropTypes.string.isRequired,
  }

// const headingStyle = {
//     color: 'red',
// }


export default Header
