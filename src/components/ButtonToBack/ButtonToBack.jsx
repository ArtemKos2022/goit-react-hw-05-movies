import { Button } from './ButtonToBack.styleed';
import PropTypes from 'prop-types';

const ButtonToBack = ({ prevLoc: { current } }) => {
    return <Button to={current}>to back</Button>;
};

ButtonToBack.propTypes = {
    prevLoc: PropTypes.object.isRequired,
};

export default ButtonToBack;