import React from "react";
import { Form } from "react-bootstrap";

const Filters = ({ onCheck }) => {
  const filters = ["software", "mechanical", "electrical", "sideProject"];

  return (
    <Form>
      <div key={`custom-inline-checkbox`} className="mb-3">
        {filters.map((filter, checked, index) => (
          <Form.Check
            key={index}
            custom
            inline
            label={filter}
            value={filter}
            checked={true}
            type="checkbox"
            onChange={onCheck}
            id={`custom-inline-checkbox-${index}`}
          />
        ))}
      </div>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Sort By</Form.Label>
        <Form.Control as="select">
          <option>Most Recent</option>
          <option>Featured</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default Filters;
