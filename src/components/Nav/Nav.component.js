import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.component";
import styled from "styled-components";

function Nav() {
  return <Wrapper></Wrapper>;
}
const Wrapper = styled.div`
  width: 100vw;
  height: 345px;
  padding: 10px 50px;
  background-image: url("https://flights.myrealtrip.com/air/imgs_ibe/mrt/bg/bg_header_pc.jpg");
`;
export default Nav;
