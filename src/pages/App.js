import { connect } from 'react-redux';
import React from 'react';

const App = ({ children }) => (
  <div style={{ minWidth: '980px' }}>
    <div>{children}</div>
  </div>
);

const mapStateToProps = (
  {
    /*auth*/
  }
) => {
  //const { loading } = auth;
  //return { loading };
};
export default connect(mapStateToProps)(App);
