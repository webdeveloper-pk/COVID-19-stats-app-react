import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Statistic, Row, Col, Divider, Card } from "antd";
import {
  ArrowUpOutlined,
  SafetyOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import allActions from "../../redux/action";
import DoughnutComponent from "../../components/charts/Doughnut";
import BarComponent from "../../components/charts/Bar";
import "./style.css";

const GlobalStatistics = () => {
  const dispatch = useDispatch();
  const globalStats = useSelector(
    (state) => state.globalCasesReducer.globalData
  );

  useEffect(() => {
    dispatch(allActions.fetchTotalCases());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Row gutter={[28, 28]} type="flex">
        {/* global stats */}
        <Col xs={24} md={12} lg={6}>
          <div className="custom-wrapper">
            <Statistic
              title="Active Cases"
              value={globalStats.active}
              className="stats-card"
              valueStyle={{ color: "#76B2E7" }}
              prefix={<ArrowUpOutlined />}
            />
          </div>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <div className="custom-wrapper">
            <Statistic
              title="Total Cases"
              value={globalStats.cases}
              className="stats-card"
              valueStyle={{ color: "#F56631" }}
              prefix={<ArrowUpOutlined />}
            />
          </div>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <div className="custom-wrapper">
            <Statistic
              title="Total Deaths"
              value={globalStats.deaths}
              className="stats-card"
              valueStyle={{ color: "#cf1322" }}
              prefix={<WarningOutlined />}
            />
          </div>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <div className="custom-wrapper">
            <Statistic
              title="Total Recovered"
              value={globalStats.recovered}
              className="stats-card"
              valueStyle={{ color: "#81C784" }}
              prefix={<SafetyOutlined />}
            />
          </div>
        </Col>
        {/* Doughnut chart  */}
        <Col xs={24} lg={18} style={{ display: "flex" }}>
          <div className="stats-card custom-wrapper">
            <DoughnutComponent globalStats={globalStats} />
          </div>
        </Col>
        {/* daily stats */}
        <Col xs={24} lg={6}>
          <div className="stats-card custom-wrapper">
            <div className="today-heading">Statistics </div>
            <p className="today-text">Last 24 hours </p>
            <Divider />
            <Statistic
              title="Today Cases"
              value={globalStats.todayCases}
              valueStyle={{ color: "#76B2E7" }}
            />
            <Divider />
            <Statistic
              title="Today Deaths"
              value={globalStats.todayDeaths}
              valueStyle={{ color: "#cf1322" }}
            />
            <Divider />
            <Statistic
              title="Today Recovered"
              value={globalStats.todayRecovered}
              valueStyle={{ color: "#81C784" }}
            />
          </div>
        </Col>
        {/* other stats */}
        <Col xs={24} lg={6} style={{ display: "flex" }}>
          <div className="stats-card custom-wrapper">
            <Statistic
              title="Total Population"
              value={globalStats.population}
              valueStyle={{ color: "#76B2E7" }}
            />
            <Divider />
            <Statistic
              title="Total Tests"
              value={globalStats.tests}
              valueStyle={{ color: "#cf1322" }}
            />
            <Divider />
            <Statistic
              title="Affected Countries"
              value={globalStats.affectedCountries}
              valueStyle={{ color: "#81C784" }}
            />
          </div>
        </Col>
        {/* bar chart */}
        <Col xs={24} lg={18} style={{ display: "flex" }}>
          <Card className="stats-card custom-wrapper">
            <BarComponent globalStats={globalStats} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default GlobalStatistics;
