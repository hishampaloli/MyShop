import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboard from "./pages/AdminDashboard";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Route path="/" component={HomePage} exact />
        <Route path="/product/:id" component={ProductDetails} exact />
        <Route path="/cart" component={CartPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/admin/dashboard" component={AdminDashboard} exact />
        <Route path="/user/profile" component={UserProfile} exact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
