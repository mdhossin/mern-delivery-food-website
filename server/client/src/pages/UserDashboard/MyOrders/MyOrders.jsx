import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOrder,
  getUserOrders,
} from "../../../redux/actions/orderActions";
import { Table } from "react-bootstrap";
import Loading from "../../../components/Loading/Loading";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const MyOrders = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { userOrders, loading, error } = useSelector(
    (state) => state.userOrders
  );
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    dispatch(getUserOrders(currentUser?.email));
  }, [dispatch, currentUser?.email, callback]);

  const deleteHandler = async (id) => {
    if (window.confirm("are you sure?")) {
      setCallback(false);
      dispatch(deleteOrder(id, toast));
    }
    setCallback(true);
  };

  return (
    <section className="section myorders container-div">
      <h2>My Orders</h2>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Name</th>
              <th>Status</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="order-loading">
                  <Loading />
                </td>
              </tr>
            ) : error ? (
              <h3>{error}</h3>
            ) : (
              <>
                {userOrders?.map(({ _id, productId, displayName, status }) => (
                  <tr key={_id}>
                    <td>#{productId}</td>
                    <td>{displayName}</td>
                    <td>
                      <button>{status}</button>
                    </td>
                    <td title="Remove">
                      {" "}
                      <FaTrashAlt
                        onClick={() => deleteHandler(_id)}
                        style={{ color: "rgb(165, 5, 29)", cursor: "pointer" }}
                      />
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </Table>
      </div>
      <h2
        style={{
          marginTop: "2rem",
          textAlign: "center",
          color: "#333",
        }}
      >
        {userOrders?.length === 0 && "Your order is empty."}
      </h2>
    </section>
  );
};

export default MyOrders;
