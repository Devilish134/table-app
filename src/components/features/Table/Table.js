import {
  Col,
  Form,
  Row,
  Button,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';

const Table = () => {
  const tables = useSelector(getAllTables);

  return (
    <Form
      key={tables.id}
      className='d-flex justify-content-center my-5'
    >
      <Form.Group
        as={Row}
        style={{ maxWidth: '20rem' }}
      >
        <Form.Label column sm='3'>
          <b>Status:</b>
        </Form.Label>
        <Col sm='9' className='mb-3'>
          <Form.Select /*value={tables.status}*/
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
          />
        </Col>
        {tables.status !== 'busy' && (
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
                //value='0'
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
