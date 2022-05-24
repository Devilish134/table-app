import {
  Button,
  ListGroup,
  Spinner,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllTables } from '../../../redux/tablesRedux';

const Tables = () => {
  const tables = useSelector(getAllTables);

  if (tables.length === 0)
    return (
      <div className='text-center my-5'>
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
          <div className='justify-content-start'>
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
          </div>
          <div className='justify-content-end'>
            <Button
              className='mx-2'
              as={Link}
              to={`/table/${table.id}`}
              variant='primary'
            >
              Show more
            </Button>
            <Button
              as={Link}
              to={`/table/edit/${table.id}`}
              variant='primary'
            >
              Edit Table
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Tables;
