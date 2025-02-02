const PaginationItems = ({ pageNumber, activePage, handlePageChange }) => {
  return (
    <li className={`page-item ${pageNumber === activePage ? "active" : ""}`}>
      <button
        className="page-link"
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    </li>
  );
};

export default PaginationItems;
