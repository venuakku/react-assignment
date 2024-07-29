function Filter({ label, options, onChange }) {
  return (
    <label className="ml-2 text-lg" htmlFor={label}>
      {" "}
      {label}
      <select
        onChange={(e) => onChange(e)}
        className="mx-2 text-lg border border-black/25 w-28 rounded-md"
      >
        <option value="All">All</option>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </label>
  );
}

export default Filter;
