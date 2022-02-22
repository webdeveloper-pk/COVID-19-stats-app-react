import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  GlobalOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import "./style.css";

const { Header, Sider, Content, Footer } = Layout;

export default class LayoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    console.log(this.props.location);
    return (
      <Layout className="layoutStyling">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            {this.state.collapsed === true ? (
              <DashboardOutlined />
            ) : (
              <>
                <DashboardOutlined /> COVID-19
              </>
            )}
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
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
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
            <span className="header-text">Global Stats</span>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
          <Footer className="footer-text">
            COVID19 Statistics ©2022 Created by Abdullah Rasheed
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
