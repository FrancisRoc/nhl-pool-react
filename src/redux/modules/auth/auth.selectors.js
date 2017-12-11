const isAuthenticated = state => state.auth.isAuthenticated;
const isFetching = state => state.auth.isFetching;
const isAuthError = state => state.auth.errorType;

export default {
  isAuthenticated,
  isFetching,
  isAuthError,
};
