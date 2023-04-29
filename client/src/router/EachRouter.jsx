import { Route, Routes } from "react-router-dom";
import { Register,Login,App } from "../components/pages";

const EachRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/app" element={<App />} />
    </Routes>
  );
};

export default EachRouter;
