import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import i3 from "../img/3.jpg";

const List = styled.div`
  z-index: 10;
  list-style-type: none;
  margin: 0;
  padding: 0;

  img {
    height: 100%;
    width: 100%;
  }
  & > .product {
    width: 200px;
    height: 200px;
    background: white;

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
      <List className="container myItems">
        <div class="product">
          {" "}
          <img src={i3} />{" "}
        </div>
        <div class="product">
          {" "}
          <img src="https://www.sephora.com/productimages/sku/s2189389-main-zoom.jpg" />{" "}
        </div>
        <div class="product">
          {" "}
          <img src="https://www.sephora.com/productimages/sku/s2042794-main-Lhero.jpg" />{" "}
        </div>
      </List>
    );
  }
}

export default Items;
