import React from 'react';
import { connect } from 'react-redux';
import Auth from './Auth/Auth';
const App = ({ children }) => (
  <div style={{ minWidth: '980px' }}>
    <Auth />
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
