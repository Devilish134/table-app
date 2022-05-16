import { useState } from 'react';
import {
  Col,
  Form,
  Row,
  Button,
} from 'react-bootstrap';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  editTableRequest,
  getAllTables,
} from '../../../redux/tablesRedux';
import TableNotBusy from '../TableNotBusy/TableNotBusy';

const Table = ({
  id,
  maxPeopleAmount,
  peopleAmount,
  status,
  bill,
}) => {
  const tables = useSelector(getAllTables);
  const dispatch = useDispatch();

  const [
    currentPeopleAmount,
    setCurrentPeopleAmount,
  ] = useState(peopleAmount);
  const [currentStatus, setCurrentStatus] =
    useState(status);
  const [currentBill, setCurrentBill] =
    useState(bill);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editTableRequest({
        currentStatus,
        currentPeopleAmount,
        maxPeopleAmount,
        currentBill,
        id,
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
            value={currentStatus}
            onChange={(e) =>
              setCurrentStatus(e.target.value)
            }
          >
            {tables.map((table) => (
              <option>{table.status}</option>
            ))}
          </Form.Select>
        </Col>
        <Form.Label column sm='3'>
          <b>People:</b>
        </Form.Label>
        <Col sm='9' className='d-flex mb-3'>
          <Form.Control
            className='text-center'
            style={{ maxWidth: '3rem' }}
            value={currentPeopleAmount}
            onChange={(e) =>
              setCurrentPeopleAmount(
                e.target.value
              )
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
                value={currentBill}
                onChange={(e) =>
                  setCurrentBill(e.target.value)
                }
              />
            </Col>
          </>
        )}
        <Col sm='12'>
          <Button
            variant='primary'
            type='submit'
          >
            Update
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Table;
