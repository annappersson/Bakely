import "../assets/scss/Pagination.scss";

interface PaginationProps {
  page: number;
  totalPages: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

function Pagination({
  page,
  totalPages,
  onNextPage,
  onPreviousPage,
}: PaginationProps) {
  return (
    <div className="pagination-container">
      <button
        className="pagination-btn"
        disabled={page <= 1}
        onClick={onPreviousPage}
      >
        ❮ Föregående
      </button>

      <span className="pagination-page">
        Sida {page} / {totalPages}
      </span>

      <button
        className="pagination-btn"
        disabled={page >= totalPages}
        onClick={onNextPage}
      >
        Nästa ❯
      </button>
    </div>
  );
}

export default Pagination;
