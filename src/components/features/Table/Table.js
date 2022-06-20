import { useState } from 'react';
import {
  Button,
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  Link,
  useNavigate,
} from 'react-router-dom';
import { editTableRequest } from '../../../redux/tablesRedux';
import TableNotBusy from '../TableNotBusy/TableNotBusy';
import TableStatus from '../TableStatus/TableStatus';
import Update from '../Update/Update';

const Table = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [peopleAmount, setPeopleAmount] =
    useState(props.peopleAmount);
  const [status, setStatus] = useState(
    props.status
  );
  const [bill, setBill] = useState(props.bill);
  const id = props.id;
  const maxPeopleAmount = props.maxPeopleAmount;
  const name = props.name;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editTableRequest({
        id,
        name,
        status,
        peopleAmount,
        maxPeopleAmount,
        bill,
      })
    );
    navigate(-1);
  };

  const validPeopleAmount = (num) => {
    if (num > maxPeopleAmount) {
      setPeopleAmount(maxPeopleAmount);
    } else if (num <= 0) {
      setPeopleAmount(0);
    } else if (isNaN(num)) {
      setPeopleAmount(5);
    } else if (status !== 'busy')
      setPeopleAmount(0);
    else {
      setPeopleAmount(num);
    }
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
              validPeopleAmount(e.target.value)
            }
          />
          <span
            className='mx-1 my-auto'
            style={{ fontSize: '22px' }}
          >
            /
          </span>
          <Form.Control
            className='text-center bg-white'
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
          <Button
            className='mx-2'
            as={Link}
            to={`/table/edit/${id}`}
            variant='primary'
          >
            Edit Table
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Table;
