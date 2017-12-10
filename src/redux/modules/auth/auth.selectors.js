const isAuthenticated = state => state.auth.isAuthenticated;
const isFetching = state => state.auth.isFetching;

export default {
  isAuthenticated,
  isFetching,
};
