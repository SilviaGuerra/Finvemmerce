import { store } from "./store";
import { Provider } from "react-redux";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import Login from "./components/Login/Login";
import Detail from "./components/Detail/Detail";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>

      <Footer />
    </Provider>
  );
}

export default App;
