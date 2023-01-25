export interface paginationData {
  dataPerPage: number;
  totalData: number;
  currentPage: number;
  paginate: (number: number) => void;
}

export const Pagination = ({
  dataPerPage,
  totalData,
  paginate,
  currentPage,
}: paginationData) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul style={{ display: "flex" }}>
        {pageNumbers?.map((number) => (
          <li
            key={number}
            style={{
              listStyle: "none",
              marginRight: "20px",
              border: "1px solid lightblue",
              width: "40px",
              textAlign: "center",
              borderRadius: "5px",
              cursor: "pointer",
              background:
                currentPage === number
                  ? "linear-gradient(90deg, #8456ec 3.25%, #e87bf8 100%)"
                  : "#fff",
              color: currentPage === number ? "#fff" : "blue",
            }}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};
