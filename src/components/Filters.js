import React from "react";
import { Form } from "react-bootstrap";

const Filters = ({ onCheck }) => {
  const filters = ["software", "mechanical", "electrical"];

  return (
    <Form>
      <div key={`custom-inline-checkbox`} className="mb-3">
        {filters.map((filter, index) => (
          <Form.Check
            custom
            inline
            label={filter}
            type="checkbox"
            onChange={onCheck}
            id={`custom-inline-checkbox-${index}`}
          />
        ))}
      </div>
    </Form>
  );
};

export default Filters;
