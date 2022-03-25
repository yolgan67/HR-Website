import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from "../../actions/userActions";
import UserList from "../UserList";

export default function Candidates  ()  {
 
const dispatch = useDispatch()
const state = useSelector(state => state)

useEffect(() => {
  dispatch(fetchUser())
// eslint-disable-next-line react-hooks/exhaustive-deps
},[] )

  return (
    <div>
      <UserList list={state.userReducer} />
    </div>
  );
};


