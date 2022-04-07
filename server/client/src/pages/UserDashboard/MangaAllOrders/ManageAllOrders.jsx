import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getAllOrders } from "../../../redux/actions/orderActions";
import { Table } from "react-bootstrap";
import Loading from "../../../components/Loading/Loading";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

const ManageAllOrders = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.allOrders);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch, callback]);

  const deleteHandler = async (id) => {
    if (window.confirm("are you sure?")) {
      setCallback(false);
      dispatch(deleteOrder(id, toast));
    }
    setCallback(true);
  };

  const handleUpdate = async (id) => {
    try {
      setCallback(false);
      const data = orders.find((order) => order._id === id);

      data.status = "Approved";
      const res = await axios.put(
        `https://yummy-food-delivery.herokuapp.com/api/orders/${id}`,
        { ...data }
      );
      toast.success(res.data.message);
      setCallback(true);
    } catch (err) {
      toast.error(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  return (
    <section className="section myorders container-div">
      <h2>Manage All Orders</h2>
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
                {orders?.map(({ _id, productId, displayName, status }) => (
                  <tr key={_id}>
                    <td>#{productId}</td>
                    <td>{displayName}</td>
                    <td>
                      <button
                        style={{
                          padding: "0.3rem 1rem",
                          background: "rgb(239,239,239)",
                        }}
                        disabled={status === "Approved" ? true : false}
                        onClick={() => handleUpdate(_id)}
                      >
                        {status}
                      </button>
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
        <h2
          style={{
            marginTop: "2rem",
            textAlign: "center",
            color: "#333",
          }}
        >
          {orders?.length === 0 && "Orders is empty."}
        </h2>
      </div>
    </section>
  );
};

export default ManageAllOrders;
