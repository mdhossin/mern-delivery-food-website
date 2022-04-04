import { Routes } from "react-router-dom";
import { Header } from "./components";
import "./scss/styles.scss";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes></Routes>
      </main>
    </>
  );
}

export default App;
