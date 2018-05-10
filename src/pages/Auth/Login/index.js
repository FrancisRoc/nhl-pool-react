import { connect } from 'react-redux';
import Login from './Login';
import { authOperations, authSelectors } from '../../../redux/modules/auth';
import { reduxForm } from 'redux-form';

const mapStateToProps = state => ({
  isAuthError: authSelectors.isAuthError(state),
});
const mapDispatchToProps = dispatch => ({
  onLogin: credentials => dispatch(authOperations.login(credentials)),
});

const LoginContainer = reduxForm({ form: 'login' })(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);

export default LoginContainer;
