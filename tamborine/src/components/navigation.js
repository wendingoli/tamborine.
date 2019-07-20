import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const List = styled.ul`
  z-index: 10;
  list-style-type: none;
  margin: 0;
  padding: 0;

  & > li {
    width: 57px;
    margin: 20px;
    font-size: 16px;
    font-weight: semi-bold;
    overflow: visible;

    & > a {
      color: #333234;
      text-decoration: none;

      &:hover {
        color: #aa6da3;
      }
    }
  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <List>
        {/* <Link to="/navigation" >my items</Link> */}
        <li>my items</li>
        <li>add product</li>
        <li>product lookup</li>
      </List>
    );
  }
}

export default Navigation;
