import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paginator from "./Paginator";
import User from "./User";
import { getUsers, followThunkCreator, unfollowThunkCreator } from "../../redux/usersReducer.ts";

export default function Users(props) {
  const users = useSelector((state) => state.UsersPage.users);
  const totalUsersCount = useSelector(
    (state) => state.UsersPage.totalUsersCount
  );
  const pageSize = useSelector((state) => state.UsersPage.pageSize);
  const currentPage = useSelector((state) => state.UsersPage.currentPage);
  const followingInProgress = useSelector(
    (state) => state.UsersPage.followingInProgress
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(currentPage, pageSize));
  }, [currentPage, dispatch, pageSize]);

  const onPageChaned = (pageNumber) => {
    dispatch(getUsers(pageNumber, pageSize));
  };
  const follow = (userId) => {
    dispatch(followThunkCreator(userId));
  };
  const unfollow = (userId) => {
    dispatch(unfollowThunkCreator(userId));
  };

  return (
    <div>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChaned={onPageChaned}
      />
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          followingInProgress={followingInProgress}
          unfollow={unfollow}
          follow={follow}
        />
      ))}
    </div>
  );
}
