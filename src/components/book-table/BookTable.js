import React from "react"
import { Col, Row } from "react-bootstrap"
import { CustomRow } from "./CustomRow"

export const BookTable = ({ books }) => {
  return (
    <>
      <Row className="fw-bolder">
        <Col>Thumbnail</Col>
        <Col>Details</Col>
      </Row>
      <hr />
      {books?.map((book) => (
        <CustomRow book={book} key={book.id} />
      ))}
    </>
  )
}
