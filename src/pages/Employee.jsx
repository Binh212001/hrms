import React, { useEffect, useState } from "react";
import Task from "../common/Task";
import ListView from "../common/layout/ListView";
import { Pagination } from "antd";
import { employeeColumn } from "../constants/constant";
import { useDispatch, useSelector } from "react-redux";
import { getEmp } from "../redux/employee.slice";

function Employee() {
  const [current, setCurrent] = useState(1);
  const [limit, setLimit] = useState(1);

  const { count, loading, employee } = useSelector((state) => state.employeeSlice);

  let totalPage = count / limit;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getEmp({
        page: current,
        limit,
      })
    );
  }, [dispatch, limit, current]);

  const changePage = (currentPage) => {
    setCurrent(currentPage);
  };

  const changeLimit = (e) => {
    setLimit(e.target.value);
  };
  if (loading) {
    return <>Loading</>;
  }

  return (
    <div>
      <Task to="/employee/new" setLimit={setLimit} />
      <ListView column={employeeColumn}>
        {employee.map((data) => {
          return (
            <tr key={data.employeeCode}>
              <td>
                <input type="checkbox" name="id" />
              </td>
              <td>{data.employeeCode}</td>
              <td>{data.fullName}</td>
              <td>{Date(data.birthday)}</td>
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
        <Pagination total={totalPage} defaultPageSize={limit} current={current} onChange={(currentPage) => changePage(currentPage)} />
        <select name="limit" value={limit} onChange={(e) => changeLimit(e)}>
          <option value={1}>1 record</option>
          <option value={2}>2 record</option>
          <option value={3}>3 record</option>
          <option value={4}>4 record</option>
        </select>
      </div>
    </div>
  );
}

export default Employee;
