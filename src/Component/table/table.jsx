import React, { useState } from "react";
import Pagenation from "../pagenation/pagenation";
import Select from "../select/Select";
import "../../pages/user/user.css";
import Cardrow from "../card/card";
const itemsPerPageOptions = [
  { id: 1, value: 10, item: "10 та бетда" },
  { id: 2, value: 20, item: "20 та бетда" },
  { id: 3, value: 30, item: "30 та бетда" },
];
export default function PaginatedTable({ rows ,UserChange }) {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(itemsPerPageOptions[0].value);
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(1);
  };
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = page * rowsPerPage;
  const paginatedRows = rows.slice(startIndex, endIndex);
  function userChange(parm){
    UserChange(parm)
  }
  return (
    <>
      {paginatedRows.map((row) => (
        <Cardrow  item={row} key={row.id}  UserChange={userChange}/>
      ))}
      <div className="Pagenation">
        <Select
          name="count_page"
          className={"page_count"}
          data={itemsPerPageOptions}
          HandleChange={handleChangeRowsPerPage}
        />
        <div className="pagenation-second">
          <Pagenation
            TotalPages={Math.ceil(rows.length / rowsPerPage)}
            handleChange={handleChangePage}
            currentPage={page}
          />
        </div>
      </div>
   </>
  );
}
