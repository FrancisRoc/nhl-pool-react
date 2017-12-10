import { connect } from 'react-redux';
import Login from './Login';
import { authOperations, authSelectors } from '../../../redux/modules/auth';

const mapStateToProps = state => ({
  isFetching: authSelectors.isFetching(state),
});
const mapDispatchToProps = dispatch => ({
  onLogin: credentials => dispatch(authOperations.login(credentials)),
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
