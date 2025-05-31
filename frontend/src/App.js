import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import EditPage from "./pages/EditPage";

function App() {

  return (
    <div className="App" >

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditPage />} /> 
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;