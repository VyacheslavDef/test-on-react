import React from "react";
import { Link } from "react-router-dom";
import { getPagesArray } from "../utils/utils";

const Pagination = ({ page, totalPages, changePage, beerPost }) => {
  let pagesArray = getPagesArray(totalPages);
  const per_page = 25;

  // const newPagesArray = pagesArray.slice(0, 10)
  return beerPost.length > 20 ? (
    <ul className="pagination">
      {pagesArray.map((p) => (
        <li key={p} className={Number(page) === Number(p) ? "page-item active" : "page-item"}>
          <Link
            className="page-link"
            to={`/test-on-react/page/${p}:${per_page}`}
            onClick={() => changePage(p, per_page)}
          >
            {p}
          </Link>
        </li>
      ))}
    </ul>
  ) : (<></>)
};

export default Pagination;
