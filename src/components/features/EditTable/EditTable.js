import { useState } from 'react';
import {
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  editTableRequest,
  getTablesById,
} from '../../../redux/tablesRedux';
import Update from '../Update/Update';

const EditTable = (props) => {
  const dispatch = useDispatch();

  const [maxPeopleAmount, setMaxPeopleAmount] =
    useState(props.peopleAmount);
  const { id } = useParams();
  const tableData = useSelector((state) =>
    getTablesById(state, parseInt(id))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editTableRequest({
        id,
        maxPeopleAmount,
      })
    );
  };

  return (
    <Form
      key={id}
      className='d-flex justify-content-center flex-fill my-5'
      onSubmit={handleSubmit}
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
              onChange={(e) =>
                setMaxPeopleAmount(
                  e.target.value
                )
              }
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
