import {
  Button,
  ListGroup,
  Spinner,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllTables } from '../../redux/tablesRedux';

const Tables = () => {
  const tables = useSelector(getAllTables);

  if (tables.length === 0)
    return (
      <>
        <Button variant='primary' disabled>
          <Spinner
            as='span'
            animation='grow'
            size='sm'
            role='status'
            aria-hidden='true'
          />
          Loading...
        </Button>
      </>
    );
  return (
    <ListGroup variant='flush'>
      {tables.map((table) => (
        <ListGroup.Item
          key={table.id}
          className='py-3 mb-4 d-flex justify-content-between align-items-start'
        >
          <div className='d-flex align-items-center'>
            <h2 className='my-0'>
              TABLE{table.id}
            </h2>
            <span className='vr mx-3'></span>
            <b className='mx-2'>Status: </b>
            <span className='text-muted'>
              {table.status}
            </span>
          </div>
          <Button
            as={Link}
            to={`/table/${table.id}`}
            variant='primary'
          >
            Show more
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Tables;
