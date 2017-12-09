import { connect } from 'react-redux';
import Register from './Register';

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = dispatch => ({});

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(
  Register
);

export default RegisterContainer;
