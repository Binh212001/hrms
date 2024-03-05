import React from "react";
import { timeoffColumn } from "../constants/constant";
import Task from "../common/Task";
import ListView from "../common/layout/ListView";
import { Pagination } from "antd";
const overtime = {
  page: 7,
  data: [
    {
      id: "LNH11",
      employeeCode: "EMP001",
      date: "12/12/2002",
      reason: "",
      status: "",
      employeeName: "John Doe",
    },
  ],
};

function AllLeave() {
  const changePage = (page) => {
    //Call api
    console.log(page);
  };
  return (
    <div>
      <Task to={"/leave/new"} />
      <ListView column={timeoffColumn}>
        {overtime?.data &&
          overtime.data.map((data) => {
            return (
              <tr key={data.id}>
                <td>
                  <input type="checkbox" name="id" />
                </td>
                <td>{data.employeeCode}</td>
                <td>{data.employeeName}</td>
                <td>{data.date}</td>
                <td>{data.reason}</td>
                <td>{data.status}</td>
              </tr>
            );
          })}
      </ListView>
      <div className="flex  justify-center items-center">
        <Pagination total={85} showSizeChanger onChange={(currentPage) => changePage(currentPage)} />
      </div>
    </div>
  );
}

export default AllLeave;
