import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Form = styled.ul`
  z-index: 10;
  list-style-type: none;
  margin: 0;
  padding: 0;

  & > .tambo-form {
    width: 70%;
    margin: 20px auto;
    /* background: green; */
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

class AddItem extends React.Component {
  render() {
    return (
      <Form>
        <form action="/action_page.php" method="get">
          <input
            type="text"
            name="productname"
            id="productname"
            placeholder="product name"
          />
          <br />
          <input
            type="text"
            name="company"
            id="company"
            placeholder="company"
          />
          <br />
          <input
            type="text"
            name="ingredients"
            id="ingredients"
            placeholder="ingredients, separated by commas"
          />
          <br />
          <input type="submit" />
        </form>
      </Form>
    );
  }
}

export default AddItem;
