import React from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../components/side-bar/SideBar";
import BorrowHistoryTable from "../../components/book-table/borrow-history-table/BorrowHistoryTable";

const BurrowHistory = () => {
  return <AdminLayout>
    <Container fluid>
      <Row>
        <Col sm="3" className="side-bar">
        <SideBar/>
        </Col>
        <Col>
        <BorrowHistoryTable /></Col>
      </Row>
  
    </Container>
  </AdminLayout>;
};

export default BurrowHistory;
