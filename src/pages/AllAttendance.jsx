import React from "react";
import Task from "../common/Task";
import ListView from "../common/layout/ListView";
import { Pagination } from "antd";
import { attendanceColumn } from "../constants/constant";

function AllAttendance() {
  const employee = {
    page: 7,
    data: [
      {
        employeeCode: "EMP001",
        fullName: "Pham Ngoc Binh",
        dateOfBirth: "111111",
        gender: true,
      },
    ],
  };

  const changePage = (page) => {
    //Call api
    console.log(page);
  };

  return (
    <div>
      <Task to="/attendance/new" />
      <ListView column={attendanceColumn}>
        {employee?.data &&
          employee.data.map((data) => {
            return (
              <tr key={data.employeeCode}>
                <td>
                  <input type="checkbox" name="id" />
                </td>
                <td>{data.employeeCode}</td>
                <td>{data.fullName}</td>
                <td>{data.dateOfBirth}</td>
                <td>{data.gender ? "Male" : "Female"}</td>
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

export default AllAttendance;
