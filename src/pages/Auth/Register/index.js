import { authOperations, authSelectors } from '../../../redux/modules/auth';
import { accountSelectors } from '../../../redux/modules/account';
import { connect } from 'react-redux';
import Register from './Register';

const mapStateToProps = state => ({
  locale: accountSelectors.getLocale(state),
  isFetching: authSelectors.isFetching(state),
});
const mapDispatchToProps = dispatch => ({
  register: credentials => dispatch(authOperations.register(credentials)),
});

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(
  Register
);

export default RegisterContainer;
