import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/HomePage"));
const Price = lazy(() => import("./pages/Price/PricePage"));
const Employees = lazy(() => import("./pages/Employees/EmployeesPage"));
const Contact = lazy(() => import("./pages/Contact/ContactPage"));
const MedCard = lazy(() => import("./pages/MedCard/MedCardPage"));

export function PathsRouter() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/adi-ved-react-/" element={<Home />} />
        <Route path="/adi-ved-react-/price" element={<Price />} />
        <Route path="/adi-ved-react-/employees" element={<Employees />} />
        <Route path="/adi-ved-react-/contact" element={<Contact />} />
        <Route path="/adi-ved-react-/medcard" element={<MedCard />} />
      </Routes>
    </Suspense>
  );
}
