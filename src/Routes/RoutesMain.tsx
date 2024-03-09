import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
