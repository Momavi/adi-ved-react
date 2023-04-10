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
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Price />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/medcard" element={<MedCard />} />
      </Routes>
    </Suspense>
  );
}
