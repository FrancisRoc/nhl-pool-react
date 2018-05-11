const isAuthenticated = state => state.auth.loading.isAuthenticated;
const isFetching = state => state.auth.loading.isFetching;
const getErrorType = state => state.auth.errorType;

export default {
  isAuthenticated,
  isFetching,
  getErrorType,
};
