export const apiUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000/'
    : 'https://nhlpoolhelperapiv2.herokuapp.com/';
