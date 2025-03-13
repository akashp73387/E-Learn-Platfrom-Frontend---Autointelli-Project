import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import UserData from "./Components/UserData";
import CardPrice from "./Components/CardPrice";
import CompanyName from "./Components/CompanyName";
import ReviewCard from "./Components/ReviewCard";
import Content from "./Components/Content";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import ForgotPassword from "./Pages/ForgotPassword";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Header />
              <UserData />
              <CardPrice />
              <CompanyName />
              <ReviewCard />
              <Content />
              <ContactForm />
              <Footer />
              <ScrollToTop/>
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
