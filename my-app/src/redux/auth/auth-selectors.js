const getUserName = state => state.auth.user.name;
const getUserIn = state => state.auth.isAuthenticated;
export default { getUserIn, getUserName };
