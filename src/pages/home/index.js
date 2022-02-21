import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux/action";
import { DatePicker } from "antd";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.casesReducer.posts);
  console.log(posts, "data");

  useEffect(() => {
    dispatch(allActions.fetchCases());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      testing
      {posts &&
        posts.map((data, ind) => {
          return <div key={ind}>{data.name}</div>;
        })}
      <DatePicker />
    </div>
  );
};

export default Home;
