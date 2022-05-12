import {
  Route,
  Routes,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tablesRedux';
import Header from './components//views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Home from './components/pages/Home/Home';
import Table from './components/pages/Table/Table';
import NotFound from './components/pages/NotFound/NotFound';

const App = () => {
  const dispatch = useDispatch();

  useEffect(
    () => fetchTables(dispatch),
    [dispatch]
  );

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/table/:id'
          element={<Table />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
