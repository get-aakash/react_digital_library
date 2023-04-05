import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { Link } from "react-router-dom";
import SideBar from "../../components/side-bar/SideBar";

const Dashboard = () => {
  return (
    <AdminLayout>
      <Container fluid>
        <Row>
          <Col sm="3" className="side-bar">
            <SideBar />
          </Col>
          <Col md="9">
          <h5 className="mt-2">Dashboard</h5>
        <hr />
        <div className="page-content">todo</div>
        <Card style={{width:"18rem"}}>
          <Card.Body>
            Account Status: Active
          </Card.Body>
          </Card>
          <Card style={{width:"18rem"}}>
          <Card.Body>
            Account Borrowed <span className="fw-bold fs-2">3</span> {""}
          </Card.Body>
          </Card>
          <Card style={{width:"18rem"}}>
          <Card.Body>
            Total Borrowed <span className="fw-bold fs-2">30</span> {""}
          </Card.Body>
          </Card>
          </Col>
        </Row>
        
      </Container>
    </AdminLayout>
  );
};

export default Dashboard;
