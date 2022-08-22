import React from "react";

const Modal = ({ pd }) => {
  const { _id, name, img, price, quantity, offer } = pd;
  return (
    <div className=" z-50 overflow-hidden">
      <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
      <div
        className="modal  overflow-visible z-50"
        style={{ height: "400px", width: "500px", zindex: "10000" }}
      >
        <div className="modal-box w-full h-full bg-yellow-500 z-10">
          <label
            for={`my-modal-${_id}`}
            className="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-black">{name}</h3>
          <p className="text-center">
            {" "}
            {offer === "5% Off" ? (
              <span className="text-black text-2xl mx-3 font-bold">
                ${price - (price * 5) / 100}
              </span>
            ) : (
              <span className="text-neutral   text-2xl  font-bold">
                ${price}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
