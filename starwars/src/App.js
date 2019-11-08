import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";
import styled from "styled-components";
import "./App.css";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://swapi.co/api/people/";

const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  margin-top: 3%;
  width: calc(97% - 22px);
  height: 92px;
  color: #000;
  text-shadow: -2px -2px 0 #ffd54e, -2px -1px 0 #ffd54e, -2px 0 0 #ffd54e,
    -2px 1px 0 #ffd54e, -2px 2px 0 #ffd54e, -1px -2px 0 #ffd54e,
    -1px -1px 0 #ffd54e, -1px 0 0 #ffd54e, -1px 1px 0 #ffd54e,
    -1px 2px 0 #ffd54e, 0 -2px 0 #ffd54e, 0 -1px 0 #ffd54e, 0 0 0 #ffd54e,
    0 1px 0 #ffd54e, 0 2px 0 #ffd54e, 1px -2px 0 #ffd54e, 1px -1px 0 #ffd54e,
    1px 0 0 #ffd54e, 1px 1px 0 #ffd54e, 1px 2px 0 #ffd54e, 2px -2px 0 #ffd54e,
    2px -1px 0 #ffd54e, 2px 0 0 #ffd54e, 2px 1px 0 #ffd54e, 2px 2px 0 #ffd54e;
  font-size: 50px;
  font-family: "Bowlby One SC", cursive;
  line-height: 86%;
  caret-color: #ffd54e;
  letter-spacing: normal;
`;

const App = () => {
  const [starWarsInfo, setstarWarsInfo] = useState([]);
  useEffect(() => {
    axios

      .get(proxyurl + url)
      .then(response => {
        console.log(response.data.results);
        setstarWarsInfo(response.data.results);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Title>
        <img
          src="https://img.icons8.com/color/48/000000/r2-d2.png"
          alt="icon of R2D2"
        />
        React Wars
        <img
          src="https://img.icons8.com/color/48/000000/r2-d2.png"
          alt="icon of R2D2"
        />
      </Title>

      <MainDiv>
        {starWarsInfo.map((item, index) => (
          <Character key={index} item={item} />
        ))}
      </MainDiv>
    </div>
  );
};

export default App;
