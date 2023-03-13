import {
  HomePage,
  ContactPage,
  PricePage,
  MedCardPage,
  EmployeesPage,
} from "./pages";
import { Routes, Route } from "react-router-dom";

function PathsRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/price" element={<PricePage />} />
      <Route path="/employees" element={<EmployeesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/medcard" element={<MedCardPage />} />
    </Routes>
  );
}

export default PathsRouter;
