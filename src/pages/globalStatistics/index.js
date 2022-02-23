import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux/action";
import { Statistic, Row, Col, Divider, Card } from "antd";
import {
  ArrowUpOutlined,
  SafetyOutlined,
  WarningOutlined,
  RightOutlined,
} from "@ant-design/icons";
import "./style.css";
import LineChart from "../../components/charts/Chart";
// import Chart from "../../components/charts/Chart";

const GlobalStatistics = () => {
  const dispatch = useDispatch();
  const globalStats = useSelector(
    (state) => state.globalCasesReducer.globalData
  );
  console.log(globalStats, "data");

  useEffect(() => {
    dispatch(allActions.fetchTotalCases());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Row gutter={[28, 28]} type="flex">
        <Col xs={24} md={12} lg={6}>
          <Statistic
            title="Active Cases"
            value={globalStats.active}
            className="stats-card"
            valueStyle={{ color: "#F56631" }}
            prefix={<ArrowUpOutlined />}
          />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Statistic
            title="Total Cases"
            value={globalStats.cases}
            className="stats-card"
            valueStyle={{ color: "#76B2E7" }}
            prefix={<ArrowUpOutlined />}
          />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Statistic
            title="Total Deaths"
            value={globalStats.deaths}
            className="stats-card"
            valueStyle={{ color: "#cf1322" }}
            prefix={<WarningOutlined />}
          />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Statistic
            title="Total Recovered"
            value={globalStats.recovered}
            className="stats-card"
            valueStyle={{ color: "#81C784" }}
            prefix={<SafetyOutlined />}
          />
        </Col>
        <Col xs={24} lg={18}>
          <div className="stats-card">
            <LineChart />
          </div>
        </Col>
        <Col xs={24} lg={6}>
          <div className="stats-card">
            <span className="todayHeading">Today's Statistics </span>
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
        {/* card with img + text */}
        <Col xs={24} lg={12} style={{ display: "flex" }}>
          <Card className="stats-card blog-card">
            <Row gutter>
              <Col xs={24} md={12} sm={24} lg={12} xl={14}>
                <div className="blog-wrapper">
                  <h2 className="blog-text"> Treatments against omicron</h2>
                  <p className="blog-paragraph">
                    Do Covid treatments work against omicron subvariant?
                    Scientists keep close watch
                  </p>
                </div>
                <div className="blog-wrapper">
                  <a
                    className="blog-link"
                    href="https://www.nbcnews.com/health/health-news/omicron-subvariant-covid-treatments-work-ba2-scientists-keep-close-wat-rcna16836"
                    target="_blank"
                  >
                    <span> Read More </span>
                    <RightOutlined />
                  </a>
                </div>
              </Col>
              <Col xs={24} md={12} sm={24} lg={12} xl={10}>
                <div className="blog-image">
                  <img src="./images/logo.png" alt="image" />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        {/* card with text */}
        <Col xs={24} lg={12} style={{ display: "flex" }}>
          <Card className="stats-card">
            <div className="">
              <div>
                <h2 className="blog-text">Update on Omicron</h2>
                <p className="blog-paragraph">
                  This decision was based on the evidence presented to the
                  TAG-VE that Omicron has several mutations that may have an
                  impact on how it behaves.
                </p>
              </div>
              <div>
                <a
                  className="blog-link"
                  href="https://blogs.adb.org/blog/five-things-you-need-know-about-new-omicron-variant"
                  target="_blank"
                >
                  <span> Read More </span>
                  <RightOutlined />
                </a>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default GlobalStatistics;
