import { Button } from "antd";
import React from "react";
import { useParams } from "react-router-dom";

function AddOvertime() {
  const { id } = useParams();

  const handleOvertime = () => {
    if (id) {
      //update
    } else {
      //new
    }
  };
  return (
    <div className="p-4">
      <div>
        <Button type="button" className="bg-green-500 border-none mr-6" onClick={() => handleOvertime()}>
          Save
        </Button>
      </div>
      <h3 className="text-xl mt-3"> {id ? "Update " : "New "} Overtime</h3>
      <div class="grid grid-cols-2 gap-5 p-5 ">
        <div class="flex flex-col">
          <label htmlFor="firstname">First Name</label>
          <input type="text" className="border border-indigo-600 p-1" name="firstname" />
        </div>
        <div class="flex flex-col">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname" className="border border-indigo-600 p-1" />
        </div>

        <div class="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input type="text" className="border border-indigo-600 p-1" name="email" />
        </div>
        <div class="flex flex-col">
          <label htmlFor="address">Address</label>
          <input type="text" className="border border-indigo-600 p-1" name="address" />
        </div>

        <div class="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" className="border border-indigo-600 p-1" />
        </div>
        <div class="flex flex-col">
          <label htmlFor="phone">Phone</label>
          <input type="text" className="border border-indigo-600 p-1" name="phone" />
        </div>
        <div class="flex flex-col">
          <label htmlFor="departmentId">Department</label>
          <select className="border border-indigo-600 p-1" name="departmentId" id="departmentId">
            <option value="1">HHH</option>
          </select>
        </div>
        <div class="flex flex-col">
          <label htmlFor="manager">Manager</label>
          <input type="text" className="border border-indigo-600 p-1" name="manager" />
        </div>
        <div class="flex flex-col">
          <label htmlFor="jobPosition">Job Position</label>
          <input type="text" className="border border-indigo-600 p-1" name="jobPosition" />
        </div>
        <div class="flex flex-col">
          <label htmlFor="jobPosition">Job Position</label>
          <input type="text" className="border border-indigo-600 p-1" name="jobPosition" />
        </div>
        <div>
          <label htmlFor="">Date of birth: </label>
          <input type="date" className="border border-indigo-600 p-1" />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <input type="radio" className="border border-indigo-600 p-1 ml-4 " name="gender" value="1" />
          Male
          <input type="radio" className="border border-indigo-600 p-1 ml-4" name="gender" value="0" />
          Female
        </div>

        <div>
          <label htmlFor="">Avatar: </label>
          <input type="file" className="border border-indigo-600 p-1" />
        </div>
      </div>
    </div>
  );
}

export default AddOvertime;
