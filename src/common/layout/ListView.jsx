import React from "react";

function ListView({ column, children }) {
  return (
    <div className="p-2">
      <table className="table w-full">
        <thead>
          <tr>
            <td>
              <input type="checkbox" name="id" />
            </td>
            {column.map((col) => (
              <td key={col}>{col}</td>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default ListView;
