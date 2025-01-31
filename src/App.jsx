import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import HomePage from "./Pages/HomePage/HomePage";
import Layout from "./Components/Layout/Layout";
import DeviceFeatures from "./Pages/DeviceFeatres/DeviceFeatures";
import ElephantHealth from "./Pages/ElephantHealth/ElephantHealth";
import Notification from "./Pages/Notification/Notification";
import Charts from "./Pages/Charts/Charts";
import ElephantProfile from "./Pages/ElephantProfile/ElephantProfile";
import SituationAnalysis from "./Components/SituationAnalysis/SituationAnalysis";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/devicefeatures" element={<DeviceFeatures />} />
        <Route path="/elephanthealth" element={<ElephantHealth />} />
        <Route path="/chartsdetails" element={<Charts />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/elephantprofile/:id" element={<ElephantProfile />} />
        <Route path="/situationAnalysis/:id" element={<SituationAnalysis />} />
      </Route>
    </Routes>
  );
}

export default App;
