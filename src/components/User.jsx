function User({ user }) {
  return (
    <div
      key={user.id}
      className="h-30 p-5 text-left border-t border-black/10 grid grid-cols-4 gap-10 lg:h-20 lg:grid-cols-6"
    >
      <p className="w-5 align-middle">{user.id.toString().padStart(2, "0")}</p>
      <img
        src={user.image}
        alt="user-image"
        className="h-12 w-12 border border-black/10 rounded-full hidden lg:block"
      />
      <p>
        {user.firstName} {user.maidenName} {user.lastName}
      </p>
      <p className="hidden lg:block">
        {user.gender[0].toUpperCase()}/{user.age}
      </p>
      <p>{user.company.title}</p>
      <p>
        {user.address.state}, {user.address.country}
      </p>
    </div>
  );
}

export default User;
