import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./Header";

const TheLayout = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
      </BrowserRouter>
    </div>
  );
};

export default TheLayout;
