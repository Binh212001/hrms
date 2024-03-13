import baseApi from "./BaseApi";
const path = "/employee";

const employeeRest = {
  getAll: (params) => {
    const url = `${path}/all`;
    return baseApi.get(url, { params });
  },
  getByEmpployeeCode: (empCode) => {},
  create: (employee) => {
    const url = `${path}/new`;
    return baseApi.post(url, employee);
  },
  update: (employee) => {
    const url = `${path}/update/${employee.employeeCode}`;
    return baseApi.post(url, employee);
  },
};

export default employeeRest;
