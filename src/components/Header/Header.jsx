import React from 'react';
import './header.css';
/**
 *
 * @param {*} param0
 * @returns
 */
export default function Header({setPage}) {
  return (
    <header className="header">
      <h1>My react app</h1>
      <div className='navigation'>
        <a href="#" onClick={() => setPage('products')}>
          Products
        </a>
        <a href="#" onClick={() => setPage('copywriters')}>
          Copywrites
        </a>
      </div>
    </header>
  );
}
