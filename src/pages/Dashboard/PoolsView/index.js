import { connect } from 'react-redux';
import PoolsView from './PoolsView';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

const PoolsViewContainer = connect(mapStateToProps, mapDispatchToProps)(
  PoolsView
);

export default PoolsViewContainer;
