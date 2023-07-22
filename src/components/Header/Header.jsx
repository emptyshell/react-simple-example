import React from 'react';
import './header.css';
/**
 *
 * @param {*} param0
 * @returns
 */
export default function Header({setPage}) {
  /**
   * handle
   * @param {*} page page
   */
  function handlePage(page) {
    console.log(page);
    setPage(page);
  };

  return (
    <header className="header">
      <h1>My react app</h1>
      <div className='navigation'>
        <a href="#" onClick={handlePage('products')}>
          Products
        </a>
        <a href="#" onClick={handlePage('copywriters')}>
          Copywrites
        </a>
      </div>
    </header>
  );
}
