import React from "react";
import "./styles/media.css";

import MainLayout from "./layouts/MainLayout";
import Cart from "./pages/ViewPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import NotFoundPage from "./pages/NotFoundPage";

import { ShoppingCartProvider } from "./context/ShoppingCartContext";

import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  // return <RouterProvider router={router} />;

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
