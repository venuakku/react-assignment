import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Columns from "./Columns";
import UserList from "./UserList";
import Header from "./Header";

function Home() {
  const users = useSelector((state) => state.users);
  const [userList, setUserList] = useState([]);
  const [idAscending, setIdAscending] = useState(true);
  const [nameAscending, setNameAscending] = useState(false);
  const [ageAscending, setAgeAscending] = useState(false);
  const [genderFilter, setGenderFilter] = useState("All");
  const [stateFilter, setStateFilter] = useState("All");
  const genders = ["male", "female"];
  const states = [...users.data]
    .map((user) => user.address.state)
    .reduce((acc, val) => {
      //returns array of all unique states
      if (!acc.includes(val)) {
        acc.push(val);
      }
      return acc;
    }, []);

  useEffect(() => {
    if (users.data) {
      setUserList([...users.data]);
    }
  }, [users.data]);

  useEffect(() => {
    filterUser(genderFilter, stateFilter);
  }, [genderFilter, stateFilter]);

  function sortById() {
    let sortedUsers = userList.sort((a, b) =>
      idAscending ? b.id - a.id : a.id - b.id
    );
    setIdAscending(!idAscending);
    setUserList([...sortedUsers]);
  }

  function sortByName() {
    let sortedUsers = userList.sort((a, b) => {
      const nameA = a.firstName.toLowerCase();
      const nameB = b.firstName.toLowerCase();
      if (!nameAscending) {
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      } else {
        return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
      }
    });
    setNameAscending(!nameAscending);
    setUserList([...sortedUsers]);
  }

  function sortByAge() {
    let sortedUsers = userList.sort((a, b) =>
      ageAscending ? b.age - a.age : a.age - b.age
    );
    setAgeAscending(!ageAscending);
    setUserList([...sortedUsers]);
  }

  function filterUser(gender, state) {
    const allUsers = [...users.data] || [];
    let filteredUsers = allUsers;

    if (genderFilter !== "All") {
      filteredUsers = filteredUsers.filter(
        (user) => user.gender === genderFilter
      );
    }

    if (stateFilter !== "All") {
      filteredUsers = filteredUsers.filter(
        (user) => user.address.state === stateFilter
      );
    }

    setUserList(filteredUsers);
  }

  function filterByGender(e) {
    const value = e.target.value;
    setGenderFilter(value);
  }

  function filterByState(e) {
    const value = e.target.value;
    setStateFilter(value);
  }

  if (users.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header
        filterByGender={filterByGender}
        filterByState={filterByState}
        states={states}
        genders={genders}
      />
      <div className="m-2 border border-black/10 rounded-lg">
        <Columns
          id={sortById}
          name={sortByName}
          age={sortByAge}
          idAscending={idAscending}
          nameAscending={nameAscending}
          ageAscending={ageAscending}
        />
        <UserList userList={userList} />
      </div>
    </>
  );
}

export default Home;
