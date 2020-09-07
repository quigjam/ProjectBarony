import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { get_orders } from "../context/PublicOrderData";
export default function Newsfeed() {
  const ordersArray = get_orders();

  return (
    <div className="newsfeed">
      <h2>Global News Feed</h2>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <b>First Phase of Summer, 1998 AE</b>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {ordersArray.map((report) => (
                <>
                  <div className="newsarticle">
                    <h3>{report.title}</h3>
                    <h5>{report.location}</h5>
                    <hr />
                    <div className="newsdescrip">
                      <p>{report.description}</p>
                    </div>
                  </div>
                </>
              ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
