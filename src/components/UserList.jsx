import User from "./User";

function UserList({ userList }) {
  return (
    <div>
      {userList &&
        userList.map((user) => {
          return <User key={user.id} user={user} />;
        })}
    </div>
  );
}

export default UserList;
