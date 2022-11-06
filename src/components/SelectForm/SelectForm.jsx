// External Import
import React from 'react';
import Form from 'react-bootstrap/Form';

// Internal Import 
import './SelectForm.css'

function SelectForm({children, ...rest}) {
  return (
    <Form.Select {...rest} aria-label="Default select example">
        {children}
    </Form.Select>
  );
}

export default SelectForm;