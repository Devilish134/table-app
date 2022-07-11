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
import './TablesResponsive.css';

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
              <h2 className='my-0 responsive'>
                {tables.name}
              </h2>
              <span className='mx-3'></span>
              <b className='mx-2 responsive'>
                Status:{' '}
              </b>
              <span className='text-muted responsive'>
                {tables.status}
              </span>
            </div>
          </div>
          <div className='justify-content-end'>
            <Button
              className='mx-2 sm-2 xs-1 responsive'
              as={Link}
              to={`/table/${tables.id}`}
              variant='primary'
            >
              Show more
            </Button>
            <Button
              className='responsive'
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
