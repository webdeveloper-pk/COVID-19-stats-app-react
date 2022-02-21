import GlobalStatistics from "./pages/globalStatistics";
import CountryStatistics from "./pages/countryStatistics";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <GlobalStatistics />
      <CountryStatistics />
    </div>
  );
};

export default App;
