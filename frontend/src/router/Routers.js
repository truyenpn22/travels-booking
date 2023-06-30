import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../page/Home";
import Tours from "../page/Tours";
import TourDetails from "../page/TourDetails";
import Login from "../page/Login";
import Register from "../page/Register";
import SearchResultList from "./../page/SearchResultList";
import ThankYou from "../page/ThankYou";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;
