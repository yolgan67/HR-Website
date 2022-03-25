import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/userActions";
import UserList from "../UserList";


export const Candidates = (props) => {
  useEffect(() => {
    props.fetchUser();
  }, []);

  return (
    <div>
      <UserList list={props.userReducer} getUserDetail={props.getUserDetail} />
    </div>
  );
};

const mapStateToProps = ({ userReducer }) => ({ userReducer });

const mapDispatchToProps = { fetchUser };

export default connect(mapStateToProps, mapDispatchToProps)(Candidates);
