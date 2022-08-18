import React from "react";

const Modal = ({ pd }) => {
  const { _id, name, img, price, quantity, offer } = pd;
  return (
    <div className=" z-50 overflow-hidden">
      <input type="checkbox" id={`my-modal-${_id}`} class="modal-toggle" />
      <div
        class="modal  overflow-visible z-50"
        style={{ height: "400px", width: "500px", zindex: "10000" }}
      >
        <div class="modal-box w-full h-full bg-yellow-500 z-10">
          <label
            for={`my-modal-${_id}`}
            class="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>
          <h3 class="text-lg font-bold text-black">{name}</h3>
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
