import React, { useState } from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Header from "./Header";
import logo from "../../assets/img/logo.avif";
import "./Layout.css";
import { Link, useNavigate } from "react-router-dom";
import MenuItem from "antd/es/menu/MenuItem";
import { data } from "autoprefixer";
const { Content, Footer, Sider } = Layout;
const page = [
  {
    path: "/employee/all",
    title: "Employee",
    layout: true,
    page: 1,
  },
  {
    path: "/attendance/all",
    title: "All Attendance",
    layout: true,
    page: 2,
  },
  {
    path: "/overtime/all",
    title: "All Overtime",
    layout: true,
    page: 3,
  },
  {
    path: "/leave/all",
    title: "All Leave",
    layout: true,
    page: 4,
  },
];

const LayoutMain = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [pageType, setPageType] = useState(1);

  const navigate = useNavigate();
  const changePageType = (data) => {
    navigate(data.path);
    setPageType(data.page);
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <div></div>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div>
          <img src={logo} alt="" width="100%" className="logo" />
        </div>

        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {page.map((data) => {
            return <MenuItem onClick={() => changePageType(data)}>{data.title}</MenuItem>;
          })}
        </Menu>
        <Link to="/login" className="text-white px-6 ">
          <LogoutOutlined />
          Log out
        </Link>
      </Sider>
      <Layout>
        <Header page={pageType} />
        <Content style={{}}>
          <div>{children}</div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutMain;
