import { useState } from 'react';
import {
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTableRequest } from '../../../redux/tablesRedux';
import TableNotBusy from '../TableNotBusy/TableNotBusy';
import TableStatus from '../TableStatus/TableStatus';
import Update from '../Update/Update';

const Table = (props) => {
  const dispatch = useDispatch();

  const [peopleAmount, setPeopleAmount] =
    useState(props.peopleAmount);
  const [status, setStatus] = useState(
    props.status
  );
  const [bill, setBill] = useState(props.bill);
  const id = props.id;
  const maxPeopleAmount = props.maxPeopleAmount;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editTableRequest({
        id,
        status,
        peopleAmount,
        maxPeopleAmount,
        bill,
      })
    );
  };

  return (
    <Form
      key={id}
      className='d-flex justify-content-center my-5'
      onSubmit={handleSubmit}
    >
      <Form.Group
        as={Row}
        style={{ maxWidth: '20rem' }}
      >
        <Form.Label column sm='3'>
          <b>Status:</b>
        </Form.Label>
        <Col sm='9' className='mb-3'>
          <Form.Select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >
            <TableStatus />
          </Form.Select>
        </Col>
        <Form.Label column sm='3'>
          <b>People:</b>
        </Form.Label>
        <Col sm='9' className='d-flex mb-3'>
          <Form.Control
            className='text-center'
            style={{ maxWidth: '3rem' }}
            value={peopleAmount}
            onChange={(e) =>
              setPeopleAmount(e.target.value)
            }
          />
          <span
            className='mx-1 my-auto'
            style={{ fontSize: '22px' }}
          >
            /
          </span>
          <Form.Control
            className='text-center'
            style={{ maxWidth: '3rem' }}
            defaultValue={maxPeopleAmount}
            disabled
          />
        </Col>
        {status !== 'busy' && <TableNotBusy />}
        {status === 'busy' && (
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
                value={bill}
                onChange={(e) =>
                  setBill(e.target.value)
                }
              />
            </Col>
          </>
        )}
        <Col sm='12'>
          <Update>Update</Update>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Table;
