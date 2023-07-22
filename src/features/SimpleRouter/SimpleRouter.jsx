import React from 'react';
import Authors from '../../components/Authors/Authors';
import Store from '../../features/Store/Store';
/**
 * My component
 * @param {*} param0 my params
 * @returns SimpleRouter
 */
function SimpleRouter({page}) {
  return <>{page === 'products' ? <Store /> : <Authors />}</>;
}

export default SimpleRouter;
