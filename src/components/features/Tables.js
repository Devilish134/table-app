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
      <div className='text-center mt-5 mb-5'>
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
      </div>
    );
  return (
    <ListGroup variant='flush'>
      {tables.map((table) => (
        <ListGroup.Item
          key={table.id}
          className='py-3 mb-4 d-flex justify-content-between align-items-start'
        >
          <h2 className='my-0'>
            TABLE{table.id}
          </h2>
          <b>Status: </b>
          <span className='ms-1 text-muted'>
            {table.status}
          </span>
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
