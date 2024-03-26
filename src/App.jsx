import { store } from "./features";
import { Provider } from "react-redux";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import Detail from "./components/Detail";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>

      <Footer />
    </Provider>
  );
}

export default App;
