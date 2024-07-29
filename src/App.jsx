import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "./redux/slice/userSlice.js";
import axios from "axios";
import Home from "./components/Home.jsx";

function App() {
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleScroll = async () => {
    try {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      //checks if the scroll bar has touched at bottom and the function is not running multiple times
      if (scrollTop + clientHeight >= scrollHeight - 1 && !loading) {
        setLoading(true);
        setSkip(skip + 10);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchUsers = async (skip) => {
    if (skip > 200) {
      setLoading(false);
      return;
    }
    return await axios
      .get(`https://dummyjson.com/users?limit=10&skip=${skip}`)
      .then((res) => {
        dispatch(addUsers(res.data.users));
        setLoading(false);
      });
  };

  useEffect(() => {
    //executes when the component mounts for the first time and anytime the value of skip changes
    fetchUsers(skip);
  }, [skip]);

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      <Home />
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default App;
