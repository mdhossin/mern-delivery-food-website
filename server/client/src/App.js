import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { auth } from "./firebase";
import { Contact, Home, Login, NotFound, Register } from "./pages";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import { SERT_USER } from "./redux/constants/userConstants";
import "./scss/styles.scss";

function App() {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch({ type: SERT_USER, payload: user });
      } else {
        dispatch({ type: SERT_USER, payload: null });
      }
    });

    return () => unsubscribe;
  }, [dispatch]);
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
