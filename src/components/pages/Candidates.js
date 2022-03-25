import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { connect } from "react-redux";
import { fetchUser } from "../../actions/userActions";
import UserList from "../UserList";


export default function Candidates  ()  {
  // useEffect(() => {
  //   props.fetchUser();
  // }, []);
const dispatch = useDispatch()
useEffect(() => {
  dispatch(fetchUser())
}, [])
const state = useSelector(state => state)
console.log(state)
  return (
    <div>
      <UserList list={state.userReducer} />
    </div>
  );
};

// const mapStateToProps = ({ userReducer }) => ({ userReducer });

// const mapDispatchToProps = { fetchUser };

// export default connect(mapStateToProps, mapDispatchToProps)(Candidates);
