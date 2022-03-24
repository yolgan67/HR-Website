import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/userActions";
import UserList from "../UserList";
import { Routes, Route } from "react-router-dom";
import UserCard from "../UserCard";

export const Candidates = (props) => {
  useEffect(() => {
    props.fetchUser();
  }, []);

  return (
    <div>
      {/* <Routes>
        <Route path="user/:id" element={<UserCard />} />
      </Routes> */}
      <UserList list={props.userReducer} getUserDetail={props.getUserDetail} />

    </div>
  );
};

const mapStateToProps = ({ userReducer }) => ({ userReducer });

const mapDispatchToProps = { fetchUser };

export default connect(mapStateToProps, mapDispatchToProps)(Candidates);
