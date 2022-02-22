import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LayoutComponent from "./layout/Layout.js";
import GlobalStatistics from "./pages/globalStatistics";
import CountryStatistics from "./pages/countryStatistics";
import ErrorPage from "./pages/errorPage";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <LayoutComponent>
          <Routes>
            <Route exact path="/" element={<GlobalStatistics />} />
            <Route path="/countryData" element={<CountryStatistics />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </LayoutComponent>
      </Router>
    </div>
  );
};

export default App;
