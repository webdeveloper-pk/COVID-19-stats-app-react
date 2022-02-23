import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  GlobalOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { usePathname } from "../customeHook/usePathName";
import "./style.css";

const { Header, Sider, Content, Footer } = Layout;

const LayoutComponent = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const path = usePathname();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const onTitle = () => {
    switch (path) {
      case "/":
        return "Global Statistics";
      case "/countryData":
        return "Countries Statistics ";
      default:
        return "Statistics";
    }
  };

  return (
    <Layout className="layoutStyling">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          {!collapsed ? (
            <>
              <DashboardOutlined /> COVID-19
            </>
          ) : (
            <DashboardOutlined />
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={path === "/" ? ["1"] : ["2"]}
        >
          <Menu.Item key="1" icon={<GlobalOutlined />}>
            <Link to="/">Global Statistics</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />}>
            <Link to="/countryData">Country Statistics</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="headerCustom">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
          <span className="header-text">{onTitle()}</span>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
        <Footer className="footer-text">
          COVID19 Statistics ©2022 by
          <a
            href="https://github.com/webdeveloper-pk"
            target="_blank"
            className="link-custom"
          >
            webdeveloper-pk
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
