import { useState } from 'react';
import {
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getAllTables,
  getTablesById,
} from '../../../redux/tablesRedux';
import Update from '../Update/Update';

const EditTable = ({ peopleAmount }) => {
  const [
    currentPeopleAmount,
    setCurrentPeopleAmount,
  ] = useState(peopleAmount);
  const { id } = useParams();
  const tableData = useSelector((state) =>
    getTablesById(state, parseInt(id))
  );

  return (
    <Form
      //key={id}
      className='d-flex justify-content-center flex-fill my-5'
      //onSubmit={handleSubmit}
    >
      <Form.Group
        as={Row}
        style={{ maxWidth: '20rem' }}
      >
        <b>
          Current Max Amount:
          <span className='mx-3'>
            {tableData.maxPeopleAmount}
          </span>
        </b>
        <Form.Label className='d-flex my-3 align-items-center'>
          <b>New Max Amount:</b>
          <Col>
            <Form.Control
              className='text-center mx-4'
              style={{ maxWidth: '3rem' }}
              value={' '}
            />
          </Col>
        </Form.Label>
        <Col sm='12'>
          <Update>Update</Update>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default EditTable;
