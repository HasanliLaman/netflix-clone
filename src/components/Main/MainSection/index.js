import React, { useEffect } from "react";
import MainCarousel from "../MainCarousel";
import Section from "./style";
import useFetch from "../../../hooks/useFetch";

const MainSection = (props) => {
  const [res] = useFetch(props.url);

  useEffect(() => {
    if (props.title === "Popüler" && res.data) {
      props.setId(res.data.results[0].id);
    }
  }, [res, props]);

  return (
    <Section>
      <h2>{props.title}</h2>
      <MainCarousel setId={props.setId} result={res} />
    </Section>
  );
};

export default MainSection;
