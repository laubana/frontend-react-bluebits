import { Route, Routes } from "react-router-dom";
import Auth from "./layouts/Auth";
import Layout from "./layouts/Layout";
import Home from "./pages/Common/Home";

const App = () => {
  return (
    <Routes>
      <Route element={<Auth />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
