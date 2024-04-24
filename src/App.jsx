import React from "react";
import { Grid, Row, Col } from "./Component/Grid";

function App() {
  return (
    <Grid gap={10} spacing={5} rowGap={"20px"}>
      <Row columnGap={"10px"}>
        <Col cols={2} md={6}>
          <div>Row 1 Column 1</div>
        </Col>
        <Col cols={2} md={6}>
          <div>Row1 Column 2</div>
        </Col>
      </Row>
      <Row columnGap={"10px"}>
        <Col cols={2} md={3}>
          <div>Row2 Column 1</div>
        </Col>
        <Col cols={2} md={9}>
          <div>Row2 Column 2</div>
        </Col>
      </Row>
      <Row columnGap={"10px"}>
        <Col cols={2} md={9}>
          <div>Row 3 Column 1</div>
        </Col>
        <Col cols={2} md={3}>
          <div>Row 3 Column 2</div>
        </Col>
      </Row>
      <Row columnGap={"10px"}>
        <Col cols={2} md={4}>
          <div>Row 4 Column 1</div>
        </Col>
        <Col cols={2} md={4}>
          <div>Row 4 Column 2</div>
        </Col>
        <Col cols={2} md={4}>
          <div>Row 4 Column 3</div>
        </Col>
      </Row>
      <Row columnGap={"10px"}>
      <Col cols={2} md={12}>
          <div>Row 5 Column 1</div>
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
