import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../features/productSlice";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
const AllProduct = ({ pd }) => {
  const { _id, name, img, price, quantity } = pd;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <>
      {" "}
      <tr key={pd._id}>
        {" "}
        <th></th>
        <td>{pd?.name}</td>
        <td>${pd?.price}</td>
        <td>{pd?.quantity}</td>
        <td>{pd?.offer}</td>
        <td>
          {" "}
          <Link
            to="/dashboard/editproduct"
            state={{ _id, name, price, quantity, img }}
          >
            <MdModeEditOutline className="text-2xl text-green-600"></MdModeEditOutline>
          </Link>
        </td>
        <td>
          {" "}
          <MdDelete
            onClick={() => handleDelete(pd?._id)}
            className="text-2xl text-red-500"
          ></MdDelete>
        </td>
      </tr>
    </>
  );
};

export default AllProduct;
