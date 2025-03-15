import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Layout from "./Components/Layout/Layout";
import DeviceFeatures from "./Pages/DeviceFeatres/DeviceFeatures";
import ElephantHealth from "./Pages/ElephantHealth/ElephantHealth";
import Charts from "./Pages/Charts/Charts";
import ElephantProfile from "./Pages/ElephantProfile/ElephantProfile";
import AddElephant from "./Pages/AddElephant/AddElephant";
import "leaflet/dist/leaflet.css";
import Notification from "./Pages/Notification/Notification";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/devicefeatures" element={<DeviceFeatures />} />
        <Route path="/elephanthealth" element={<ElephantHealth />} />
        <Route path="/chartsdetails/:id" element={<Charts />} />
        <Route path="/elephantprofile/:id" element={<ElephantProfile />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/addelephant" element={<AddElephant />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
