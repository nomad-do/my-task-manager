// InputField.js
import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

const InputField = ({ label, name, value, onChange, type = 'text', min, max }) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <FormControl
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        placeholder={`${label}`}
      />
    </Form.Group>
  );
};

export default InputField;
