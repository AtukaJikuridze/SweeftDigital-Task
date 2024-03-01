import "./App.css";
import Main from "./pages/Main/MainPage";
import Navbar from "./components/Navbar/Navbar";
import History from "./pages/History/History";
import { Route, Routes } from "react-router-dom";
import PhotoDetails from "./components/PhotoDetails/PhotoDetails";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/History" element={<History />} />
        </Route>
      </Routes>
      <PhotoDetails />
    </>
  );
}

export default App;
