import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
