import { HiFilter } from "react-icons/hi";
import Filter from "./Filter";

function Header({ filterByGender, filterByState, states, genders }) {
  return (
    <div className="m-2 flex justify-between">
      <div className="mr-5 text-3xl font-bold">Employees</div>
      <div className="m-2 flex">
        <HiFilter className="h-7 w-7 hidden lg:block" />
        <Filter
          label="State"
          onChange={(e) => filterByState(e)}
          options={states}
        />
        <Filter
          label="Gender"
          onChange={(e) => filterByGender(e)}
          options={genders}
        />
      </div>
    </div>
  );
}

export default Header;
