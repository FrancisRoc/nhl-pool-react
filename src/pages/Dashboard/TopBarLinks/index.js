import { authOperations } from '../../../redux/modules/auth';
import { connect } from 'react-redux';
import TopBarLinks from './TopBarLinks';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authOperations.logout()),
});

const TopBarLinksContainer = connect(mapStateToProps, mapDispatchToProps)(
  TopBarLinks
);

export default TopBarLinksContainer;
