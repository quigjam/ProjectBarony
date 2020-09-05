import React from "react";
import { Accordion, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Newsfeed from "../components/Newsfeed";
import Nav from "../components/Nav";
export default function Home() {
  return (
    <>
      <Nav />
      <body>
        <Alert variant="info">
          In the News Feed, you can find reports of all events that are public
          knowledge!
        </Alert>
        <Newsfeed />
      </body>
    </>
  );
}
