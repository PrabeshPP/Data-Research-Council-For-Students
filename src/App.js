import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";

//Header and Footer Import
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";

//Since all the pages would have header and Footer,these two components must not not used inside of Routes element

//Pages import

// import HomePage from "./Pages/home";
// import Community from "./Pages/community";
// import Event from "./Pages/event";
// import About from "./Pages/about";
// import DataSet from "./Pages/datasets";

import Privacy from "./Pages/privacy";
import Terms from "./Pages/terms";
const HomePage = React.lazy(() => import("./Pages/home"));
const Community = React.lazy(() => import("./Pages/community"));
const Event = React.lazy(() => import("./Pages/event"));
const About = React.lazy(() => import("./Pages/about"));
const DataSet = React.lazy(() => import("./Pages/datasets"));
const Verify = React.lazy(() => import("./Pages/verify"));

//

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense
        fallback={
          <div className="loadingBox">
            <div className="spinner"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<Event />} />
          <Route path="/about" element={<About />} />
          <Route path="/datasets" element={<DataSet />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
