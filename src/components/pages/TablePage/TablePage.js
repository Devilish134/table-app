import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTablesById } from '../../../redux/tablesRedux';
import Table from '../../features/Table/Table';

const TablePage = () => {
  const { id } = useParams();
  const tableData = useSelector((state) =>
    getTablesById(state, parseInt(id))
  );

  if (!tableData)
    return (
      <div className='text-center my-5'>
        <Spinner
          as='span'
          animation='grow'
          size='sm'
          role='status'
          aria-hidden='true'
        >
          Loading...{' '}
        </Spinner>
      </div>
    );

  return (
    <>
      <h1 className='text-center'>
        Table {tableData.id}
      </h1>
      <Table {...tableData} />
    </>
  );
};

export default TablePage;
