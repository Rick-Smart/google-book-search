import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreatePostForm from "../components/CreatePostForm";
import PostsList from "../components/PostsList";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md">
          <CreatePostForm />
        </Col>
      </Row>
      <Row>
        <Col size="md">
          <PostsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
