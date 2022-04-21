const initialState = {
    users: [],
    fetching: false,
    fetched: false,
    error: {},
   
  };
  
  const newUserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "NEW_USER_PENDING":
        return { ...state, fetching: true };
      case "NEW_USER_FULFILLED":
        return { ...state, fetching: false, fetched: true, users: payload };
      case "NEW_USER_REJECTED":
        return { ...state, fetching: false, error: payload };
     
      default:
        return state;
    }
  };
  export default newUserReducer;