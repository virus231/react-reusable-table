import React from 'react';
import useTable from "./hooks/useTable";
import mockDate from './mockData';
import {COLUMNS} from "./utils/constants";
import './App.css';


function App() {
    const {headers, rows, pagination: {nextPage, previousPage, pageNumber, totalPages}} =
        useTable({columns: COLUMNS, data: mockDate, pagination: {pageSize: 2} })

    console.log(rows)
    const valueRow = rows.map((row: any) => row.map(({renderedValue}: any) => renderedValue))

    return (
    <div className="App">
      <table>
        <thead>
            <tr>
                {headers.map((header: any, index: number) => (
                    <th key={index}>{header}</th>
                ))}
            </tr>
        </thead>
          <tbody>
          {
              valueRow.map((value: any, index: number) => (
                  <tr key={index}>
                      {value.map((row: any, index: number) => (
                          <td key={index}>
                              {row}
                          </td>
                      ))}
                  </tr>
              ))
          }
          </tbody>
      </table>
        <div className="pagination">
            <button disabled={pageNumber == 1} onClick={previousPage}>&lt;</button>
            <span>Page {pageNumber} of {totalPages}</span>
            <button disabled={totalPages == pageNumber} onClick={nextPage}>&gt;</button>
        </div>
    </div>
  );
}

export default App;
