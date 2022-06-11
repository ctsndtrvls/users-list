import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfilesList from "./ProfilesList";
import Profile from "./Profile";

import "./styles.css";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProfilesList />} />
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>
    </div>
  );
}
