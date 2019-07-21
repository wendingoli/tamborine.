import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const List = styled.ul`
  z-index: 10;
  list-style-type: none;
  margin: 0;
  padding: 0;

  & > product {
    width: 200px;
    height: 200px;
    background: red;

    & > container {
      float: left;
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }

    & > a {
      color: #333234;
      text-decoration: none;

      &:hover {
        color: #aa6da3;
      }
    }
  }
`;

class Items extends React.Component {
  render() {
    return (
      <List>
        <div class="container myitems">
          <div class="product" />
          <div class="product" />
          <div class="product" />
          <div class="product" />
          <div class="product" />
          <div class="product" />
          <div class="product" />
          <div class="product" />
        </div>
      </List>
    );
  }
}

export default Items;
