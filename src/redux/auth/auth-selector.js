const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserEmail = (state) => state.auth.user.email;
const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

// const getError = (state) => state.auth.error;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsFetchingCurrent,
  // getError,
};

export default authSelectors;
