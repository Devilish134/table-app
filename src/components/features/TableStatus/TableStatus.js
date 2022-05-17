import { useSelector } from 'react-redux';
import { getAllStatuses } from '../../../redux/statusRedux';

const TableStatus = () => {
  const tableStatus = useSelector(
    getAllStatuses
  );

  return tableStatus.map((status) => (
    <option key={status}>{status}</option>
  ));
};

export default TableStatus;
