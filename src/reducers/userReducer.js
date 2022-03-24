const initialState = {
  users: [],
  fetching: false,
  fetched: false,
  error: {},
  userDetail: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_USERS_PENDING":
      return { ...state, fetching: true };
    case "FETCH_USERS_FULFILLED":
      return { ...state, fetching: false, fetched: true, users: payload };
    case "FETCH_USERS_REJECTED":
      return { ...state, fetching: false, error: payload };
    case "USER_DETAIL":
      return { ...state, userDetail: payload };

    default:
      return state;
  }
};
export default userReducer;
