import React from "react";
import Cookie from "js-cookie";

const Home = () => {
  return (
    <div>
      <h1>hello {Cookie.get("fname")}</h1>
    </div>
  );
};

export default Home;
