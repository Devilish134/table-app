import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';

const Table = () => {
  const tables = useSelector(getAllTables);

  return (
    <div
      className='py-3 mb-4 d-flex justify-content-between mx-auto'
      style={{ width: '350px' }}
    >
      <h5 className='my-4'>Status:</h5>
      <Form.Select
        className='mx-4 my-4'
        aria-label='Default select example'
      >
        {tables.map((table) => (
          <option
            key={table.id}
            value={table.status}
          >
            {table.status}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default Table;
