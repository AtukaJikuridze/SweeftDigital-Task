import "./App.css";
import Main from "./pages/Main/MainPage";
import Navbar from "./components/Navbar/Navbar";
import History from "./pages/History/History";
function App() {
  return (
    <>
      <Navbar />
      <History />
      <Main />
    </>
  );
}

export default App;
