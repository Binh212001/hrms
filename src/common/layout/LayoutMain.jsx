import React, { useState } from "react";
import { DesktopOutlined, FileOutlined, LogoutOutlined, PieChartOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Header from "./Header";
import logo from "../../assets/img/logo.avif";
import "./Layout.css";
import { Link, useNavigate } from "react-router-dom";
const { Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Employee", 1, <PieChartOutlined />),
  getItem("Attendance", 2, <DesktopOutlined />),
  getItem("Overtime", 3, <FileOutlined />),
  getItem("Leave", 4, <FileOutlined />),
];

const LayoutMain = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const handleChangePage = (data) => {
    setPage(data.key);
    navigate("/employee/all");
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
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={(data) => {
            handleChangePage(data);
          }}
        />
        <Link to="/login" className="text-white px-6 ">
          <LogoutOutlined />
          Log out
        </Link>
      </Sider>
      <Layout>
        <Header page={page} />
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
