import React from "react";
import Paginator from "./Paginator";
import User from "./User";

export default function Users({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChaned,
  ...props
}) {
  return (
    <div>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChaned={onPageChaned}
      />
      {props.users.map((user) => (
        <User
          user={user}
          key={user.id}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
        />
      ))}
    </div>
  );
}
