import React from "react";
import ReactDOM from "react-dom";
import "./EditModal.css";

function EditModal({ children }) {
  return ReactDOM.createPortal(
    <div className="EditModalBackground">{children}</div>,
    document.getElementById("editmodal")
  );
}

export { EditModal };
