import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getAllOrders } from "../../../redux/actions/orderActions";

import { Table } from "react-bootstrap";
import Loading from "../../../components/Loading/Loading";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

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

  return (
    <section className="section myorders container-div">
      <SectionTitle title="Manage All Orders" />
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
              <Loading />
            ) : error ? (
              <h3>{error}</h3>
            ) : (
              <>
                {orders?.map(({ _id, productId, displayName, status }) => (
                  <tr key={_id}>
                    <td>#{productId}</td>
                    <td>{displayName}</td>
                    <td>{status}</td>
                    <td title="Remove">
                      {" "}
                      <FaTrashAlt
                        onClick={() => deleteHandler(_id)}
                        style={{ color: "rgb(165, 5, 29)" }}
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
