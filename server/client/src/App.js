import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Router, Routes } from "react-router-dom";
import { Header } from "./components";
import { auth } from "./firebase";
import {
  Contact,
  Home,
  Login,
  NotFound,
  ProductDetail,
  Register,
} from "./pages";
import AddProduct from "./pages/AddProduct/AddProduct";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import AddNewProduct from "./pages/UserDashboard/AddNewProduct/AddNewProduct";
import Blank from "./pages/UserDashboard/Blank/Blank";
import MyOrders from "./pages/UserDashboard/MyOrders/MyOrders";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import Welcome from "./pages/UserDashboard/Welcome/Welcome";
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

          <Route path="products/:productId" element={<ProductDetail />} />

          <Route
            path="contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />

          <Route path="dashboard" element={<UserDashboard />}>
            <Route index element={<Welcome />}></Route>
            <Route path="myorders" element={<MyOrders />}></Route>
            <Route path="addproduct" element={<AddProduct />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
