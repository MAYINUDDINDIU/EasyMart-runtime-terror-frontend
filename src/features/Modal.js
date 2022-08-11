import React from "react";

const Modal = ({ pd }) => {
  const { _id, name, img, price, quantity } = pd;
  return (
    <div>
      {/* <label
        for="my-modal-3"
        class="btn modal-button bg-secondary hover:bg-secondary text-black border-0  absolute bottom-0 left-0 w-full rounded-none"
      >
        Details &nbsp; <ion-icon name="chevron-forward-outline"></ion-icon>
      </label> */}
      <input type="checkbox" id={`my-modal-${_id}`} class="modal-toggle" />
      <div class="modal ">
        <div class="modal-box  ">
          <label
            for={`my-modal-${_id}`}
            class="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">{name}</h3>
          <p class="py-4">
            <b>Price:</b> ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
