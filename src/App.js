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
import NotFound from './components/pages/NotFound/NotFound';
import { Container } from 'react-bootstrap';
import TablePage from './components/pages/TablePage/TablePage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(
    () => fetchTables(dispatch),
    [dispatch]
  );

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/table/:id'
            element={<TablePage />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
        <Footer />
      </Container>
    </>
  );
};

export default App;
