import { CodeSandboxOutlined, DeleteOutlined, FilterFilled, UnorderedListOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Search from "antd/es/input/Search";
import React from "react";

function Task() {
  return (
    <div className="flex justify-between  items-center p-4 border-b-2 ">
      <div style={{ width: "20%" }}>
        <Button type="button" className="bg-green-500 border-none mr-6">
          New
        </Button>
        <span>
          <DeleteOutlined />
        </span>
      </div>
      <div style={{ width: "50%" }}>
        <Search placeholder="search" />
      </div>
      <div style={{ width: "20%" }} className="flex gap-5  justify-end">
        <FilterFilled />
        <UnorderedListOutlined />
        <CodeSandboxOutlined />
      </div>
    </div>
  );
}

export default Task;