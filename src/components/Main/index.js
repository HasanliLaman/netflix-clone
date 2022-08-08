import React, { useEffect, useState } from "react";
import MainCategories from "./MainCategories";
import MainHero from "./MainHero";
import MainContainer from "./style";
import useFetch from "../../hooks/useFetch";

const Main = () => {
  const [id, setId] = useState("");

  return (
    <MainContainer>
      <MainHero id={id} />
      <MainCategories setId={setId} />
    </MainContainer>
  );
};

export default Main;
