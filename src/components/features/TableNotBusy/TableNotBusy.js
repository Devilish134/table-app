import { Col, Form } from 'react-bootstrap';

const TableNotBusy = ({ bill }) => {
  return (
    <>
      <Form.Label column sm='3'>
        <b>Bill:</b>
      </Form.Label>
      <Col sm='9' className='d-flex mb-3'>
        <span
          className='me-1 my-auto'
          style={{ fontSize: '20px' }}
        >
          $
        </span>
        <Form.Control
          className='text-center'
          style={{ maxWidth: '4rem' }}
          value='0'
          disabled
        />
      </Col>
    </>
  );
};

export default TableNotBusy;
