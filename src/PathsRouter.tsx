import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/HomePage"));
const Price = lazy(() => import("./pages/Price/PricePage"));
const Employees = lazy(() => import("./pages/Employees/EmployeesPage"));
const Contact = lazy(() => import("./pages/Contact/ContactPage"));
const MedCard = lazy(() => import("./pages/MedCard/MedCardPage"));

export function PathsRouter() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/price" Component={Price} />
        <Route path="/employees" Component={Employees} />
        <Route path="/contact" Component={Contact} />
        <Route path="/medcard" Component={MedCard} />
      </Routes>
    </Suspense>
  );
}
