import React from "react";
import Task from "../common/Task";
import ListView from "../common/layout/ListView";
import { Pagination } from "antd";
import { employeeColumn } from "../constants/constant";

function Employee() {
  const employee = {
    page: 7,
    data: [
      {
        employeeCode: "EMP001",
        fullName: "Pham Ngoc Binh",
        dateOfBirth: "111111",
        gender: true,
        department: "111",
        phone: null,
        email: null,
        jobPosition: "",
      },
      {
        employeeCode: "EMP002",
        fullName: "Pham Ngoc Binh",
        dateOfBirth: "111111",
        gender: true,
        department: "111",
        phone: null,
        email: null,
        jobPosition: "",
      },
    ],
  };

  const changePage = (page) => {
    //Call api
    console.log(page);
  };

  return (
    <div>
      <Task to="/employee/new" />
      <ListView column={employeeColumn}>
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
                <td>{data.department}</td>
                <td>{data.phone}</td>
                <td>{data.email}</td>
                <td>{data.jobPosition}</td>
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

export default Employee;
