import { connect } from 'react-redux';
import React from 'react';

const App = ({ children }) => (
  <div style={{ minWidth: '980px' }}>
    <div>{children}</div>
  </div>
);

const mapStateToProps = state => ({});
export default connect(mapStateToProps, null)(App);
