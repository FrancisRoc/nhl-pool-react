import { connect } from 'react-redux';
import Login from './Login';
import { authOperations } from '../../../redux/modules/auth';

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = dispatch => ({
  onLogin: credentials => dispatch(authOperations.login(credentials)),
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
