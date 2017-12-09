import { connect } from 'react-redux';
import Auth from './Auth';
import { authSelectors } from '../../redux/modules/auth';

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

const AuthContainer = connect(mapStateToProps, null)(Auth);

export default AuthContainer;
