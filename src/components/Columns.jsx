function Columns({ id, name, age, idAscending, nameAscending, ageAscending }) {
  return (
    <div className="h-30 p-5 font-bold grid grid-cols-4 gap-10 lg:h-20 lg:grid-cols-6">
      <p onClick={() => id()}>
        ID <span className="text-red-600">{idAscending ? "↓" : "↑"}</span>
      </p>
      <p className="hidden lg:block">Image</p>
      <p onClick={() => name()}>
        Full Name
        <span className="text-red-600"> {nameAscending ? "↓" : "↑"}</span>
      </p>
      <p className="hidden lg:block" onClick={() => age()}>
        Demography
        <span className="text-red-600"> {ageAscending ? "↓" : "↑"}</span>
      </p>
      <p>Designation</p>
      <p>Location</p>
    </div>
  );
}

export default Columns;
