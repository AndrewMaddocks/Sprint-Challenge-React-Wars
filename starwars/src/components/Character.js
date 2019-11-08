import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
`;
const Div2 = styled.div`
  width: 70%;
  border: 3px solid #393118;
  padding: 2%;
`;
const H1 = styled.h1`
  color: #fbd54e;
`;
const H3 = styled.h3`
  color: #4bd5ee;
`;

const Character = props => {
  return (
    <>
      <Div>
        <Div2>
          <H1>{props.item.name}</H1>
          <H3>Height:{props.item.height}</H3>
          <H3>Weight:{props.item.mass}</H3>
          <H3>Hair color:{props.item.hair_color}</H3>
          <H3>Skin Color:{props.item.skin_color}</H3>
        </Div2>
      </Div>
    </>
  );
};
export default Character;
