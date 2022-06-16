import { useEffect, useState } from 'react';
import {
  Button,
  ListGroup,
  Spinner,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { API_URL } from '../../../config';
import { getAllTables } from '../../../redux/tablesRedux';

const Tables = () => {
  const table = useSelector(getAllTables);

  const [tables, setTables] = useState([]);
  useEffect(() => {
    const fetchTables = () => {
      fetch(`${API_URL}/tables/`)
        .then((res) => res.json())
        .then((json) => {
          const result = json.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          setTables(result);
        })
        .catch((e) => {
          console.log('error', e);
        });
    };
    fetchTables();
  }, []);

  if (table.length === 0)
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
      {tables.map((tables) => (
        <ListGroup.Item
          key={tables.id}
          className='py-3 mb-4 d-flex justify-content-between align-items-start'
        >
          <div className='justify-content-start'>
            <div className='d-flex align-items-center'>
              <h2 className='my-0'>
                {tables.name}
              </h2>
              <span className='vr mx-3'></span>
              <b className='mx-2'>Status: </b>
              <span className='text-muted'>
                {tables.status}
              </span>
            </div>
          </div>
          <div className='justify-content-end'>
            <Button
              className='mx-2'
              as={Link}
              to={`/table/${tables.id}`}
              variant='primary'
            >
              Show more
            </Button>
            <Button
              as={Link}
              to={`/table/edit/${tables.id}`}
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
