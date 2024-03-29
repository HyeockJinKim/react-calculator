import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  padding: 10px;
  margin: 20px auto;
  border: 2px solid #000;
  border-radius: 5px;
  text-align: center;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

class Panel extends React.Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

export default Panel;
