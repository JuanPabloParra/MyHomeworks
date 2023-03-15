import React from "react";

function FollowHeader() {
  return <h2>Followers</h2>;
}

function FollowList({ followers }) {
  return (
    <ul>
      {followers.map((follower) => (
        <li key={follower.id}>{follower.name}</li>
      ))}
    </ul>
  );
}

function FollowFooter() {
  return <p>End of Followers</p>;
}

function Follow() {
  const followers = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Peter" },
  ];

  return (
    <div>
      <FollowHeader />
      <FollowList followers={followers} />
      <FollowFooter />
    </div>
  );
}

export default Follow;
