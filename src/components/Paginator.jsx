import React from 'react';

const Paginator = ({ goToThePreviousPage, goToTheNextPage }) => {
  return (
    <div className="paginator">
      {goToThePreviousPage && (
        <button
          className="btn btn-previous"
          onClick={() => goToThePreviousPage()}
        >
          Previous Page
        </button>
      )}
      {goToTheNextPage && (
        <button className="btn btn-next" onClick={() => goToTheNextPage()}>
          Next Page
        </button>
      )}
    </div>
  );
};

export default Paginator;
