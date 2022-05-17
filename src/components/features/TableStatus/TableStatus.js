import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';

const TableStatus = () => {
  const tables = useSelector(getAllTables);

  return (
    <>
      {tables.map((table) => (
        <option>{table.status}</option>
      ))}
    </>
  );
};

export default TableStatus;
