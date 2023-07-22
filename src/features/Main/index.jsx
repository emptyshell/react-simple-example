import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import SimpleRouter from '../../features/SimpleRouter/SimpleRouter';

/**
 * Wrapper
 * @returns Main
 */
function Main() {
  const [currentPage, setCurrentPage] = useState('Products');

  return (
    <>
      <Header setPage={setCurrentPage} />
      <SimpleRouter page={currentPage} />
    </>
  );
}

export default Main;
