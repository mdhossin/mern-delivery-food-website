import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home, Login, Register } from "./pages";
import "./scss/styles.scss";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
